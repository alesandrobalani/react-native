import React from 'react'
import { View, Text, ScrollView, FlatList } from 'react-native'

const alunos = [
    {id: 1, nome:'João', nota:3.4},
    {id: 2, nome:'Roberto', nota:7.8},
    {id: 3, nome:'Roberto', nota:7.8},
    {id: 4, nome:'Roberto', nota:7.8},
    {id: 5, nome:'Roberto', nota:7.8},
    {id: 6, nome:'Roberto', nota:7.8},
    {id: 7, nome:'Roberto', nota:7.8},
    {id: 8, nome:'Roberto', nota:7.8},
    {id: 9, nome:'Roberto', nota:7.8},
    {id: 10, nome:'Roberto', nota:7.8},
    {id: 11, nome:'Jorge', nota:7.8},
    {id: 12, nome:'Roberto', nota:7.8},
    {id: 13, nome:'Roberto', nota:7.8},
    {id: 14, nome:'Roberto', nota:7.8},
    {id: 15, nome:'Roberto', nota:7.8},
    {id: 16, nome:'Roberto', nota:7.8},
    {id: 17, nome:'Roberto', nota:7.8},
    {id: 18, nome:'Roberto', nota:7.8},
    {id: 19, nome:'Roberto', nota:7.8},
    {id: 20, nome:'Roberto', nota:7.8},
    {id: 21, nome:'Jorge', nota:7.8},
    {id: 22, nome:'Roberto', nota:7.8},
    {id: 23, nome:'Roberto', nota:7.8},
    {id: 24, nome:'Roberto', nota:7.8},
    {id: 25, nome:'Roberto', nota:7.8},
    {id: 26, nome:'Roberto', nota:7.8},
    {id: 27, nome:'Roberto', nota:7.8},
    {id: 28, nome:'Roberto', nota:7.8},
    {id: 29, nome:'Roberto', nota:7.8},
    {id: 30, nome:'Roberto', nota:7.8}
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 90,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',
    //flex
    //cross axys 
    alignItems: 'center',
    //main axys
    justifyContent: 'space-between',
    flexDirection: 'row'
}

export const Aluno = props =>
     <View style={itemEstilo}>    
        <Text>Nome: {props.nome}</Text>
        <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
     </View>

export default props => {
    const renderItem = ({ item }) => {
        return <Aluno {...item} />
    }

    return (
        <ScrollView>
            <FlatList 
                data={alunos} 
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString() } />
        </ScrollView>
    )
}