import React, { useState } from 'react'
import { Alert, StatusBar, Text, View } from 'react-native'
import { PRIMARY_COLOR } from '../theme/commons/constants';
import { TitleComponent } from '../components/TitleComponent';
import { BodyComponent } from '../components/BodyComponent';
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';


interface MayorForm{
    num1: string;
    num2: string;
}


export const Screen4 = () => {

    const [mayorForm, setMayorForm] = useState<MayorForm>({ num1: '', num2: '' });

    const [result, setResult] = useState<string>('');


    const handleChange = (name: string, value: string): void => {
        setMayorForm({ ...mayorForm, [name]: value });
    }

    const handleMayorIgual = () => {
        const { num1, num2 } = mayorForm;
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);

        if(num1 === '' || num2 === ''){
            Alert.alert('Error', 'Todos los campos son obligatorios')
            return;
        }

        if (number1 === number2) {
            setResult('Los numeros son iguales');
        } else if (number1 > number2) {
            setResult(`El numero mayor es: ${number1}`);
        } else {
            setResult(`El numero mayor es: ${number2}`);
        }
    };


    return (
        <View>        
            <StatusBar backgroundColor={PRIMARY_COLOR}/>
            <TitleComponent title='Formulario'/>
            <BodyComponent>
                <Text style = {styles.titlePrincipal}>Digite dos numeros:</Text>
                <Text style = {styles.textDescription}>Veremos cual es el mayor</Text>
                <View style = {styles.formConatainer}>
                <InputComponent text='Numero 1' 
                keyboard='number-pad' 
                handleChange={handleChange}
                name='num1'
                />
                
                <InputComponent text='Numero 2' 
                keyboard='number-pad' 
                handleChange={handleChange}
                name='num2'
                />
                <ButtonComponent title='>='
                    handleAccion={handleMayorIgual}
                />
                </View>
                <Text style={styles.result}>{result}</Text>
            </BodyComponent>

        </View>
    )
}
