import React, {useState} from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import ResultImc from "../ResultImc/index.js";
import styles from "./style.js";

export default function Form() {
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState('Preencha o peso e a altura');
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState('Calcular IMC');
    
    const handleHeight = (height) => {
        setHeight(height.replace(',', '.'));
    }
    const handleWeight = (weight) => {
        setWeight(weight.replace(',', '.'));
    }
    const validationImc = () => {
        if (height !== null && weight !== null) {
            calculateImc();
            setHeight(null);
            setWeight(null);
        }else{
            setMessageImc('Preencha o peso e a altura');
            setTextButton('Calcular IMC');
        }
    }
    const calculateImc = () => {
        const imc = (weight / (height * height)).toFixed(2);
        setImc(imc);
        if(imc < 18.5) {
            setMessageImc("Você tem "+height+" de altura, pesando "+weight+" Kg,  seu IMC é "+imc+", assim, você está abaixo do peso");
        } else if (imc >= 18.5 && imc < 25) {
            setMessageImc("Você tem "+height+" de altura, pesando "+weight+" Kg,  seu IMC é "+imc+", assim, você está com o peso normal");
        } else if (imc >= 25 && imc < 30) {
            setMessageImc("Você tem "+height+" de altura, pesando "+weight+" Kg,  seu IMC é "+imc+", assim, você está com sobrepeso");
        } else if (imc >= 30 && imc < 35) {
            setMessageImc("Você tem "+height+" de altura, pesando "+weight+" Kg,  seu IMC é "+imc+", assim, você está com obesidade grau 1");
        } else if (imc >= 35 && imc < 40) {
            setMessageImc("Você tem "+height+" de altura, pesando "+weight+" Kg,  seu IMC é "+imc+", assim, você está com obesidade grau 2");
        } else if (imc >= 40) {
            setMessageImc("Você tem "+height+" de altura, pesando "+weight+" Kg,  seu IMC é "+imc+", assim, você está com obesidade grau 3");
        }
        setTextButton('Calcular novamente');
    }
    
    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput style={styles.input} maxLength={4} onChangeText={handleHeight} value={height} placeholder="Ex. 1.75" keyboardType="numeric"></TextInput>
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput style={styles.input} maxLength={6} onChangeText={handleWeight} value={weight} placeholder="Ex. 75.355" keyboardType="numeric"></TextInput>
                <TouchableOpacity style={styles.buttonCalculator} onPress={()=>validationImc()}><Text style={styles.textButtonCalculator}>{textButton}</Text></TouchableOpacity>
                <ResultImc height={height} weight={weight} messageResultImc={messageImc} resultImc={imc} />
            </View>
            
        </View>
    );
}
