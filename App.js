import React, { Component } from 'react';
import {  AppRegistry, Text, Button, View, StyleSheet } from 'react-native';

import Topo from './src/components/topo';
import Icone from './src/components/icone';

export default class App extends React.Component  {

  constructor(props) {
    super(props);

    this.state = { escolhaUsuario: '', escolhaComputador: '', resultado: '' };
  }

  jokenpo(escolhaUsuario) {

    const numAleatorio = Math.floor(Math.random() * 5);

    let escolhaComputador = '';

    switch (numAleatorio) {
      case 0: escolhaComputador = 'pedra'; break;
      case 1: escolhaComputador = 'papel'; break;
      case 2: escolhaComputador = 'tesoura'; break;
      case 3: escolhaComputador = 'lagarto'; break;
      case 4: escolhaComputador = 'spock'; break;
      default: escolhaComputador = '';
    }

    let resultado = '';

    if(escolhaComputador == 'pedra'){
      resultado = 'EMPATE!!';
      if(escolhaUsuario == 'lagarto' || escolhaUsuario == 'tesoura'){
        resultado = 'Robô Venceu!!!';
      }
      if(escolhaUsuario == 'spock' || escolhaUsuario == 'papel'){
        resultado = 'Você Venceu!!!';
      }
    }

    if(escolhaComputador == 'papel'){
      resultado = 'EMPATE!!';
      if(escolhaUsuario == 'spock' || escolhaUsuario == 'pedra'){
        resultado = 'Robô Venceu!!!';
      }
      if(escolhaUsuario == 'lagarto' || escolhaUsuario == 'tesoura'){
        resultado = 'Você Venceu!!!';
      }
    }

    if(escolhaComputador == 'tesoura'){
      resultado = 'EMPATE!!';
      if(escolhaUsuario == 'papel' || escolhaUsuario == 'lagarto'){
        resultado = 'Robô Venceu!!!';
      }
      if(escolhaUsuario == 'pedra' || escolhaUsuario == 'spock'){
        resultado = 'Você Venceu!!!';
      }
    }

    if(escolhaComputador == 'lagarto'){
      resultado = 'EMPATE!!';
      if(escolhaUsuario == 'spock' || escolhaUsuario == 'papel'){
        resultado = 'Robô Venceu!!!';
      }
      if(escolhaUsuario == 'tesoura' || escolhaUsuario == 'pedra'){
        resultado = 'Você Venceu!!!';
      }
    }

    if(escolhaComputador == 'spock'){
      resultado = 'EMPATE!!';
      if(escolhaUsuario == 'pedra' || escolhaUsuario == 'tesoura'){
        resultado = 'Robô Venceu!!!';
      }
      if(escolhaUsuario == 'lagarto' || escolhaUsuario == 'papel'){
        resultado = 'Você Venceu!!!';
      }
    }

    /*apague*/
    if (escolhaComputador === 'papel') {
      if (escolhaUsuario === 'papel') {
        resultado = 'Empate';
      }

      if (escolhaUsuario === 'tesoura') {
        resultado = 'Você ganhou';
      }

      if (escolhaUsuario === 'pedra') {
        resultado = 'Você perdeu';
      }
    }

    if (escolhaComputador === 'tesoura') {
      if (escolhaUsuario === 'tesoura') {
        resultado = 'Empate';
      }

      if (escolhaUsuario === 'pedra') {
        resultado = 'Você ganhou';
      }

      if (escolhaUsuario === 'papel') {
        resultado = 'Você perdeu';
      }
    }

    this.setState({ escolhaUsuario, escolhaComputador, resultado });
  }

  render() {
    return (
      <View style={background.container}>

      <Topo/>

        <View style={presentationResults.palco}>
          <Text style={presentationResults.txtResultado}>{this.state.resultado}</Text>

          <Icone escolha={this.state.escolhaComputador} jogador='Computador' />
          
          <Icone escolha={this.state.escolhaUsuario} jogador='Você' />

        </View>

        <View style={presentationResults.painelAcoes}>

          <View style={presentationResults.btnEscolha}>
            <Button title="pedra" onPress={() => { this.jokenpo('pedra'); }} />
          </View>

          <View style={presentationResults.btnEscolha}>
            <Button title="papel" onPress={() => { this.jokenpo('papel'); }} />
          </View>

          <View style={presentationResults.btnEscolha}>
            <Button title="tesoura" onPress={() => { this.jokenpo('tesoura'); }} />
          </View>

          <View style={presentationResults.btnEscolha}>
            <Button title="lagarto" onPress={() => { this.jokenpo('lagarto'); }} />
          </View>

          <View style={presentationResults.btnEscolha}>
            <Button title="spock" onPress={() => { this.jokenpo('spock'); }} />
          </View>
        </View>
        
        
        
      </View>
    );
  }
}

/*apresentação resultados*/
const presentationResults = StyleSheet.create({
  btnEscolha: {
    width: 90,
    
  },
  painelAcoes: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  palco: {
    alignItems: 'center',
    height: 370
  },
  txtResultado: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    
  }
});


const background = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    
    
  }  
});