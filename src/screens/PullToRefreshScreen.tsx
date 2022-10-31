import React, { useState, useContext } from 'react'
import { View, ScrollView, RefreshControl, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/AppTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/theme/ThemeContext';

export const PullToRefreshScreen = () => {

    const { top } = useSafeAreaInsets()
    const { theme: { colors, dividerColor } } = useContext(ThemeContext)


    const [refreshing, setRefreshing] = useState(false)

    const [data, setData] = useState<string>()

    const onRefresh = () => {
        setRefreshing(true)

        setTimeout(() => {
            console.log('Terminamos')
            setRefreshing(false)
            setData('Hola Mundo')
        }, 3500);
    }

    return (
        <ScrollView
            style={{
                marginTop: refreshing ? top : 0
            }}
            refreshControl={
                <RefreshControl 
                    refreshing={ refreshing }
                    onRefresh= { onRefresh }
                    // progressViewOffset={ 100 }
                    progressBackgroundColor={ dividerColor }
                    colors={[ colors.text ]}
                    // colors={['white', 'red', 'orange']}
                    // style={{ backgroundColor: '#5856D6' }}   //IOS
                    // tintColor='white'    //IOS
                    // title='Refreshing'   //IOS
                    // titleColor='white' //IOS
                />
            }
        >
            <View style={styles.globalMargin}>
                <HeaderTitle title='Pull to Refresh' />

                {
                    data && <HeaderTitle title={data} />
                }
                

            </View>
        </ScrollView>
    )
}
