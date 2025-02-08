import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import { TitleComponent } from '../components/TitleComponent'
import { BodyComponent } from '../components/BodyComponent'
import { styles } from '../theme/appTheme'
import { PRIMARY_COLOR } from '../theme/commons/constants'
import { ButtonComponent } from '../components/ButtonComponent'
import { CommonActions, useNavigation } from '@react-navigation/native'

export const Screen1 = () => {

    const navigation = useNavigation();

    return (
        <View>        
            <StatusBar backgroundColor={PRIMARY_COLOR}/>
            <TitleComponent title='Bienvenido'/>
            <BodyComponent>
                <Text style = {styles.titlePrincipal}>Por favor escoja una opcion:</Text>

                <View style = {styles.formConatainer}>
                    <ButtonComponent title='Imagen 1'
                        handleAccion={() => navigation.dispatch(CommonActions.navigate({name: 'Screen2'}))}/>
                    <ButtonComponent title='Imagen 2'
                        handleAccion={() => navigation.dispatch(CommonActions.navigate({name: 'Screen3'}))}/>
                    <ButtonComponent title='>='
                        handleAccion={() => navigation.dispatch(CommonActions.navigate({name: 'Screen4'}))}/>
                    <ButtonComponent title='<='
                        handleAccion={() => navigation.dispatch(CommonActions.navigate({name: 'Screen5'}))}/>
                </View>
            </BodyComponent>
        </View>
    )
}
