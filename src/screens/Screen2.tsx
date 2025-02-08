import React from 'react'
import { Image, StatusBar, View } from 'react-native'
import { BodyComponent } from '../components/BodyComponent'
import { TitleComponent } from '../components/TitleComponent'
import { styles } from '../theme/appTheme'
import { PRIMARY_COLOR } from '../theme/commons/constants'

export const Screen2 = () => {
    return (
        <View>        
        <StatusBar backgroundColor={PRIMARY_COLOR}/>
        <TitleComponent title='Gatito negro'/>
        <BodyComponent>
            <Image
                source={{ uri: "https://i.pinimg.com/736x/5b/37/1a/5b371a23b1b1f08670a1998bda9b9d9d.jpg" }}
                style={styles.image}
            />
        </BodyComponent>
        
        </View>
    )
}
