import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/AppTheme';

export const TextInputScreen = () => {
    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title='TextInputs' />

            <TextInput 
                style={style.inputStyle}
            />

        </View>
    )
}


const style = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10
    }
})
