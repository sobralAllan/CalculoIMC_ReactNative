import React, {useState} from "react"
import { View, Text, TextInput, Button } from "react-native"
import ResultImc from "./ResultImc/"

export default function Form(){

const [height, setHeight] = useState(null)
const [weight, setWeight] = useState(null)
const [messageImc, setMessageIMC] = useState("Preecha o peso e a altura")
const [imc, setImc] = useState(null)
const [textButton, setTextButton] = useState("Calcular")

function imcCalculator(){
    return setImc((weight/(height^2)).toFixed(2))
}

function validation(){
    if(weight != null && height != null){
        setMessageIMC("Seu IMC é igual: ")
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setTextButton("Calcular Novamente")
        return 
    }
    setImc(null)
    setTextButton("Calcular")
    setMessageIMC("Preencha o peso e a altura")
}

    return(
        <View >
            <View> 
                <Text>Altura: </Text>
                <TextInput
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex. 1.80"
                    keyboardType="numeric"
                />
                
                <Text>Peso: </Text>
                <TextInput
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Ex. 85.56"
                    keyboardType="numeric"
                />
                
                <Button
                    onPress={() => validation()} 
                    title={textButton}
                />
                
            </View>{/* View do Form encerrando */}
            <ResultImc resultImc={imc} messageResultImc={messageImc}  />
        </View>
    );
}//fim do export