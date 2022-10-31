import React, { useState, useContext } from 'react'
import { View, Modal, Button, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/theme/ThemeContext';
import { styles } from '../theme/AppTheme';

export const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState(false)
    const { theme: { colors, dark } } = useContext(ThemeContext)

    return (
        <View style={styles.globalMargin}>
            
            <HeaderTitle title='Modal Screen'/>

            <Button
                title='Abrir modal'
                onPress={ () => setIsVisible(true) }
                color={colors.primary}
            />


            <Modal
                animationType='fade'
                visible={isVisible}
                transparent={ true }
            >
                {/* Background negro */}
                <View
                    style={{
                        flex: 1,
                        // width: 100,
                        // height: 100,
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    {/* Contenido del Modal */}
                    <View
                        style={{
                            backgroundColor: 'white',
                            width: 200,
                            height: 200,
                            justifyContent: 'center',
                            alignItems: 'center',
                            shadowOffset: {
                                width: 0,
                                height: 10
                            },
                            shadowOpacity: 0.25,
                            elevation: 4,
                            borderRadius: 5
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color:  'black'
                            }}
                        >
                            Modal
                        </Text>

                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: '300',
                                color: 'black',
                                marginVertical: 20
                            }}
                        >
                            Cuerpo del modal
                        </Text>

                        <Button
                            title='Cerrar'
                            onPress={() => setIsVisible(false) }
                            color={colors.primary}
                            
                        />
                    </View>

                </View>
            </Modal>

        </View>
    )
}
