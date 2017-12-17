import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const imagem = require('../../imgs/logo.png');

class Topo extends Component {
  render() {
    return (
      <View>
        <Image style={logoImagens.logo} source={imagem} />
      </View>
    );
  }
}

export default Topo;


const logoImagens = StyleSheet.create({
  logo:{
    width: 100,
    height: 100,
    borderRadius:360,
    marginTop: 20,
    alignSelf: 'center' 
  
  }
  
});