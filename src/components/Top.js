import React, { Component } from 'react';
import {StyleSheet, View, Image} from 'react-native';

class Top extends Component{
    render(){
      return(
        <View>          
            <Image  style={imagens.logo} source={require('../../imgs/logo.png')}/>
          </View>
      );
    }
  }
/*export componente*/


/*style*/
const imagens = StyleSheet.create({
    logo:{
      width: 150,
      height: 150,
      borderRadius:360,
      marginTop: 20,
      marginBottom:20,
      alignSelf: 'center' 
    
    }
    
  });

  export default Top;