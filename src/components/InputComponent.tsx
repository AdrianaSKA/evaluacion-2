import React from 'react'
import { KeyboardTypeOptions, TextInput } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props{
    text: string
    keyboard?: KeyboardTypeOptions;
    handleChange: (name: string, value: string) => void;
    name: string;
}

export const InputComponent = ({text, keyboard = 'default', handleChange, name}: Props) => {
    return (
        <TextInput
            placeholder= {text}
            keyboardType= {keyboard}
            onChangeText={(value) => handleChange(name,value)}
            style= {styles.inputText}
            />
    )
}
