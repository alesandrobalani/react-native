import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import Padrao from '../estilo/Padrao'

export default class Contador extends Component {

    constructor(props) {
        super(props)
        this.maisum = this.maisum.bind(this)
        this.setStatusInicial = this.setStatusInicial.bind(this)
    }

    state = {
        numero: this.props.numero
    }

    setStatusInicial() {
        this.setState({ numero:  this.props.numero })
    }

    maisum() {
        this.setState({ numero: this.state.numero + 1 })
    }

    render() {
        this.props.numero++
        return (
            <View>
            <Text style={Padrao.ex}>{this.state.numero}</Text>
                <TouchableHighlight 
                onPress= { this.maisum }
                onLongPress= { this.setStatusInicial }>                    
                    <Text style={Padrao.ex}>Incrementar/Zerar</Text>
                </TouchableHighlight>
            </View>
        )
    }
}