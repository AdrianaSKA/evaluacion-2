import React, { useState } from 'react'
import { Alert, StatusBar, Text, View } from 'react-native'
import { TitleComponent } from '../components/TitleComponent';
import { BodyComponent } from '../components/BodyComponent';
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { PRIMARY_COLOR } from '../theme/commons/constants';

interface MenorForm{
    num1: string;
    num2: string;
}

export const Screen5 = () => {
    const [menorForm, setMenorForm] = useState<MenorForm>({ num1: '', num2: '' });
    
        const [result, setResult] = useState<string>('');
    
    
        const handleChange = (name: string, value: string): void => {
            setMenorForm({ ...menorForm, [name]: value });
        }
    
        const handleMayorIgual = () => {
            const { num1, num2 } = menorForm;
            const number1 = parseFloat(num1);
            const number2 = parseFloat(num2);
    
            if(num1 === '' || num2 === ''){
                Alert.alert('Error', 'Todos los campos son obligatorios')
                return;
            }
    
            if (number1 === number2) {
                setResult('Los numeros son iguales');
            } else if (number1 < number2) {
                setResult(`El numero menor es: ${number1}`);
            } else {
                setResult(`El numero menor es: ${number2}`);
            }
        };
    
    
        return (
            <View>        
                <StatusBar backgroundColor={PRIMARY_COLOR}/>
                <TitleComponent title='Formulario'/>
                <BodyComponent>
                    <Text style = {styles.titlePrincipal}>Digite dos numeros:</Text>
                    <Text style = {styles.textDescription}>Veremos cual es el menor</Text>
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
