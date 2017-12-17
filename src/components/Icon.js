import React, { Component } from 'react';
import { StyleSheet,  View,  Image, Text } from 'react-native';

export default Icon;

class Icon extends Component{
    render(){
      if(this.props.escolha == 'PEDRA'){
       return(
         <View style={partida.resultados}>
        <Text style={partida.txtResultados}>{this.props.jogador}</Text>
        <Image style={partida.imgjogadas} source={require('../../imgs/Pedra.png')} />
        </View>
       );
            }else if(this.props.escolha == 'PAPEL'){
              return(
                <View style={partida.resultados}>
                <Text style={partida.txtResultados}>{this.props.jogador}</Text>
                <Image style={partida.imgjogadas} source={require('../../imgs/Papel.png')} />
                </View>
              );
        
            }else if(this.props.escolha == 'TESOURA'){
              return(
                <View style={partida.resultados}>
                <Text style={partida.txtResultados}>{this.props.jogador}</Text>
                <Image style={partida.imgjogadas} source={require('../../imgs/tesoura.png')} />
                </View>
              );
            }else if(this.props.escolha == 'LAGARTO'){
              return(
                <View style={partida.resultados}>
                <Text style={partida.txtResultados}>{this.props.jogador}</Text>
               <Image style={partida.imgjogadas} source={require('../../imgs/lagarto.png')} />
              </View>
              );
            }else if(this.props.escolha == 'SPOCK'){
              return(
                <View style={partida.resultados}>
                <Text style={partida.txtResultados}>{this.props.jogador}</Text>
                <Image style={partida.imgjogadas} source={require('../../imgs/spock.png')} />
                </View>
              );
            }else{
            } return false;
    }
  }
  

const partida = StyleSheet.create({
    resultados:{
      justifyContent:'center',
      height:170,
      paddingTop: 170,
      
      
  
    },
    txtResultados:{
      textAlign:'center',
      fontSize: 20,
      fontWeight: 'bold',
      color: '#696969'
      
     
      
    },
  
    imgjogadas:{
      height: 100,
      width: 100,
      alignSelf: 'center',
      paddingTop: 15,
      marginBottom: 15
      
  
  
    }
  });