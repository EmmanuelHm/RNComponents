import React, { useContext, useState } from 'react'
import { View, TextInput, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/AppTheme';
import { useForm } from '../hooks/useForm';
import { CustomSwitch } from '../components/CustomSwitch';
import { ThemeContext } from '../context/theme/ThemeContext';

export const TextInputScreen = () => {

    const { form, onChange, isSubscribed } = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribed: false
    })

    const { theme: { colors, dividerColor } } = useContext(ThemeContext)

    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView>

                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <View style={styles.globalMargin}>

                        <HeaderTitle title='TextInputs' />

                        <TextInput 
                            style={{
                                ...style.inputStyle,
                                borderColor: colors.text,
                                color: colors.text
                            }}
                            placeholder='Ingresa tu nombre:'
                            placeholderTextColor={dividerColor}
                            autoCorrect={false}  //Mostrar sugerencias de teclado
                            autoCapitalize='words'
                            onChangeText={ (value) => onChange(value, 'name') }

                        />

                        <TextInput 
                            style={{
                                ...style.inputStyle,
                                borderColor: colors.text,
                                color: colors.text
                            }}
                            placeholder='Ingresa tu email:'
                            placeholderTextColor={dividerColor}
                            autoCorrect={false}  
                            autoCapitalize='none'
                            onChangeText={ (value) => onChange(value, 'email') }
                            keyboardType='email-address'
                        />

                        <View style={style.switchRow}>
                            <Text style={style.switchText}>Suscribirse</Text>
                            <CustomSwitch isOn={ isSubscribed } onChange={ (value) => onChange( value, 'isSubscribed' ) } />
                        </View>

                        <HeaderTitle title={ JSON.stringify( form, null, 5 ) } />

                        <HeaderTitle title={ JSON.stringify( form, null, 5 ) } />

                        <TextInput 
                            style={{
                                ...style.inputStyle,
                                borderColor: colors.text,
                                color: colors.text
                            }}
                            placeholder='Ingresa tu telefono:'
                            placeholderTextColor={dividerColor}
                            onChangeText={ (value) => onChange(value, 'phone') }
                            keyboardType='phone-pad'
                        />

                        <View style={{height: 100}} />

                    </View>
                
                </TouchableWithoutFeedback>

            </ScrollView>

        </KeyboardAvoidingView>
    )
}


const style = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10,
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    switchText: {
        color: '#000',
        fontSize: 25
    }
})
