import React, { useContext } from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../context/theme/ThemeContext';
import { MenuItem } from '../interfaces/appinterfaces';

interface Props {
    menuItem: MenuItem
}

export const FlatListMenuItem = ( {menuItem} : Props ) => {

    const navigation = useNavigation()
    // const {colors} = useTheme()
  const { theme: { colors } } = useContext(ThemeContext)


    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={ () => navigation.navigate<any>( menuItem.component ) }
        >
            <View style={styles.container}>
                <Icon
                    name={ menuItem.icon }
                    // color='#5856D6'
                    color={ colors.primary }
                    size={23} 
                />

                <Text style={{
                    ...styles.itemText,
                    color: colors.text
                    // color: colors.text
                }}>
                    { menuItem.name }
                </Text>

                <View style={{flex: 1}} />

                <Icon
                    name='chevron-forward-outline'
                    // color='#5856D6'
                    color={ colors.primary }
                    size={23} 
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    itemText: {
        // color: '#000',
        marginLeft: 10,
        fontSize: 19
    }
})
