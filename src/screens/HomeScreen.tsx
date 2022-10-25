import React from 'react'
import { FlatList, View } from 'react-native';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { styles } from '../theme/AppTheme';
import { menuItems } from '../data/menuItems';
import { HeaderTitle } from '../components/HeaderTitle';

export const HomeScreen = () => { 

    const itemSeparator = () => {
        return (
            <View  
                style={{
                    borderBottomWidth: 1,
                    opacity: 0.3,
                    marginVertical: 8
                }}
            />
        )
    }

  return (
    <View style={{ flex: 1, ...styles.globalMargin }}>

        <FlatList 
            data={ menuItems }
            renderItem={ ( { item }) => <FlatListMenuItem menuItem={ item } /> }
            keyExtractor={ (item) => item.name }
            ListHeaderComponent={ () => <HeaderTitle title='Opciones de menú'/> } 
            ItemSeparatorComponent={ itemSeparator }
        />
        
    </View>
  )
}