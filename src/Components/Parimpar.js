import React from 'react'
import { View, Text } from 'react-native'
import Padrao from '../estilo/Padrao'

function parOuImpar(num) {
    // if (num % 2 ==0)
    //   return <Text style={Padrao.ex}>Par</Text>
    // else
    //   return <Text style={Padrao.ex}>Impar</Text>
    // const texto = num % 2 == 0 ? "Par" : "Impar"
    // return <Text style={Padrao.ex}>{texto}</Text>
    return num % 2 == 0 ? "Par" : "Impar"
}

export default props => 
    <View>
        <Text style={Padrao.ex}>{parOuImpar(props.numero)}</Text>
        {/* {parOuImpar(props.numero)} */}
        {
            /*
            props.numero % 2 == 0
            ? <Text style={Padrao.ex}>Par</Text>
            : <Text style={Padrao.ex}>Impar</Text>
            */
        }
    </View>