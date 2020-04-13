import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Simples from './Components/Simples'
import Parimpar from './Components/Parimpar'

export default class App extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Simples texto='flexível' />
        <Parimpar numero='33' />
        <Parimpar numero='30' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})