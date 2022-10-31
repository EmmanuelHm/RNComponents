import React, { useContext } from 'react'
import { View, Button, Alert } from 'react-native';

import prompt from 'react-native-prompt-android';

import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/theme/ThemeContext';
import { styles } from '../theme/AppTheme';

export const AlertScreen = () => {

    const { theme: { colors } } = useContext(ThemeContext)

    const showAlert = () => {
        Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") },
            //   { text: "??", onPress: () => console.log("?? Pressed") },
            ],
            {
                cancelable: true, // Poder omitir la alerta
                onDismiss: () => console.log('onDismiss') // si se omite la alerta 
            }
        );
    }

    const showPrompt = () => {
        //Solo para IOS
        // Alert.prompt(
        //     '¿Esta seguro',
        //     'Esta accion no se puede revertir',
        //     (valor: string) => console.log('info', valor),
        //     'plain-text',
        //     'Hola mundo',
        //     'number-pad'
        // )

        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
             {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
             {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            }
        );

    }

    return (
        <View  style={styles.globalMargin} >
            <HeaderTitle title='Alerts' />

            <Button
                title='Mostrar Alerta'
                onPress={ showAlert }
                color={ colors.primary }
            />

            <View style={{marginVertical: 5}}></View>

            {/* Solo para IOS */}
            <Button
                title='Mostrar Prompt'
                onPress={ showPrompt }
                color={ colors.primary }
            />


        </View>
    )
}
