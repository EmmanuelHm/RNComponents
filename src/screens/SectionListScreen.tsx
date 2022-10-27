import React from 'react'
import { View, SectionList, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/AppTheme';
import { ItemSeparator } from '../components/ItemSeparator';

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
      casa: "DC Comics",
      data: ["Batman", "Superman", "Robin", ]
    },
    {
      casa: "Marvel Comics",
      data: ["Antman", "Thor", "Spiderman","Antman", ]
    },
    {
      casa: "Anime",
      data: ["Kenshin", "Goku", "Saitama", ]
    }
];

export const SectionListScreen = () => {
    return (
        <View style={{...styles.globalMargin, flex: 1}}>
            
            <SectionList
                sections={casas}
                keyExtractor={ (item, index) => item + index}

                ListHeaderComponent={ () => <HeaderTitle title='Section List' /> }

                ListFooterComponent={ () => (
                    <View style={{marginBottom: 50}}>
                        <HeaderTitle title={'Total de casas: ' + casas.length} />
                    </View>
                ) }

                renderItem={ ({item}) => <Text style={{color: '#000'}}>{ item }</Text> }
                stickySectionHeadersEnabled={true}
                renderSectionHeader={ ({section}) => (
                    <View>
                        <HeaderTitle title={ section.casa } />
                    </View>
                ) }

                renderSectionFooter={ ({section}) => (
                    <HeaderTitle title={'Total: ' + section.data.length} />  
                ) }

                // SectionSeparatorComponent={() => <ItemSeparator/> }
                ItemSeparatorComponent={() => <ItemSeparator/> }

                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}
