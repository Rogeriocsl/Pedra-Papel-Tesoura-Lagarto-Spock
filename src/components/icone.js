import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const imgPedra = require('../../imgs/pedra.png');
const imgPapel = require('../../imgs/papel.png');
const imgTesoura = require('../../imgs/tesoura.png');
const imgLagarto = require('../../imgs/lagarto.png');
const imgSpock = require('../../imgs/spock.png');


class Icone extends Component {
  render() {
   

    if (this.props.escolha === 'pedra') {
      return (
        <View style={ChoicesPlayers.results}>
          <Text style={ChoicesPlayers.txtResults}>{this.props.jogador}</Text>
          <Image style={ChoicesPlayers.choicesImage} source={imgPedra} />
        </View>
      );
    } else if (this.props.escolha === 'papel') {
      return (
        <View style={ChoicesPlayers.results}>
          <Text style={ChoicesPlayers.txtResults}>{this.props.jogador}</Text>
          <Image style={ChoicesPlayers.choicesImage} source={imgPapel} />
        </View>
      );
    } else if (this.props.escolha === 'tesoura') {
      return (
        <View style={ChoicesPlayers.results}>
          <Text style={ChoicesPlayers.txtResults}>{this.props.jogador}</Text>
          <Image style={ChoicesPlayers.choicesImage} source={imgTesoura} />
        </View>
      );
    }
     
    return false;
  }
}



export default Icone;

/* styles escolha do jogador,
  player choice
*/
const ChoicesPlayers = StyleSheet.create({
  /*resultados*/
  results:{
    justifyContent:'center',
    height:170,
    
    

  },
  /*txt resultados*/
  txtResults:{
    textAlign:'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#696969'
    
   
    
  },

  /*escolha imagem*/
  choicesImage:{
    height: 80,
    width: 80,
    alignSelf: 'center',
    


  }
});
