import React from 'react'
import { Image, StatusBar, View } from 'react-native'
import { PRIMARY_COLOR } from '../theme/commons/constants'
import { TitleComponent } from '../components/TitleComponent'
import { BodyComponent } from '../components/BodyComponent'
import { styles } from '../theme/appTheme'

export const Screen3 = () => {
    return (
            <View>        
            <StatusBar backgroundColor={PRIMARY_COLOR}/>
            <TitleComponent title='Gatito naranja'/>
            <BodyComponent>
                <Image
                    source={{ uri: "https://i.pinimg.com/736x/1f/54/ac/1f54acbbecdfb5b248d42ace992b699b.jpg" }}
                    style={styles.image}
                />
            </BodyComponent>
            
            </View>
        )
}
