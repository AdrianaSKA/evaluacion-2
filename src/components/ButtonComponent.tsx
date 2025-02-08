import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props{
    title: string,
    handleAccion: () => void;
}


export const ButtonComponent = ({title, handleAccion} : Props) => {
    return (
        <TouchableOpacity style= {styles.buttonForm}
            onPress={handleAccion}
        >
            <Text style={styles.buttonFormText}>{title}</Text>
        </TouchableOpacity>
    )
}
