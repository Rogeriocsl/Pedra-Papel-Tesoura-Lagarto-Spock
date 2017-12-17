import React, { Component } from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

class Icon extends Component{
    render(){
        
            return(
                <View style={partida.resultados}>
                </View>
            );
        }
      
    }
 

  
export default Icon;


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