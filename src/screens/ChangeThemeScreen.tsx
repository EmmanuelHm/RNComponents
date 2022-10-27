import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/AppTheme';

export const ChangeThemeScreen = () => {
    return(
        <View style={styles.globalMargin}>
            <HeaderTitle title='Theme' />

            <TouchableOpacity
                style={{
                    width: 150,
                    height: 50,
                    borderRadius: 20,
                    backgroundColor: '#5856D6',
                    justifyContent: 'center'
                }}
                activeOpacity={0.8}
            >
                <Text 
                    style={{
                        color: '#fff',
                        textAlign: 'center',
                        fontSize: 22
                    }}
                >
                    Light / Dark
                </Text>
            </TouchableOpacity>
        </View>
    )
}
