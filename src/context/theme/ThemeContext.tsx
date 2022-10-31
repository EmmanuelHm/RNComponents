import React, { createContext, useReducer, useEffect } from "react";
import { lightTheme, themeReducer, ThemeState, darkTheme } from './themeReducer';
import { Appearance, AppState, useColorScheme } from "react-native";

interface ThemeContextProps {
    theme: ThemeState,
    setDarkTheme: () => void,
    setLightTheme: () => void 
}

export const ThemeContext = createContext({} as ThemeContextProps)

export const ThemeProvider = ({ children }: any ) => {

    //Cambiar tema dependiendo del sistema
    const colorScheme = useColorScheme()

    //Cambio de tema para IOS / andorid
    const [theme, dispatch] = useReducer(themeReducer, (colorScheme === 'dark') ? darkTheme : lightTheme)
    
    //Si no funiona en android usar: 
    // const [theme, dispatch] = useReducer(themeReducer, (Appearance.getColorScheme() === 'dark') ? darkTheme : lightTheme)

    //Implementacion en IOS (pero ya funciona en android)
    useEffect(() => {

        (colorScheme === 'light') 
            ? setLightTheme()
            : setDarkTheme()

    }, [colorScheme])

    //Funcionamieto para android //Alternativa
    // useEffect(() => {

    //     AppState.addEventListener( 'change', (status) => {
    //         if(status === 'active'){
    //             (Appearance.getColorScheme() === 'light') 
    //                 ? setLightTheme()
    //                 : setDarkTheme()
    //         }
    //     } )

    // }, [])
    
    const setDarkTheme = () => {
        dispatch({type: "set_dark_theme"})
        console.log('Dark theme')
    }

    const setLightTheme = () => {
        dispatch({type: "set_light_theme"})
        console.log('Light theme')
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            setDarkTheme,
            setLightTheme

        }}>
            { children }
        </ThemeContext.Provider>
    )
}