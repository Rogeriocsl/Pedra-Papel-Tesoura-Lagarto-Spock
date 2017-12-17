import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

import Top from './src/components/Top';
import Icon from './src/components/Icon';


export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {escolhaUsuario : '',
                  escolhaDoRobo : '',
                   resultado : ''
                  }   
  }

  jokenLagartoSpock(escolhaUsuario){
    
    var numeroAleatorio = Math.floor(Math.random() * 5);

    var escolhaDoRobo = '';
    
    switch (numeroAleatorio) {
     case 0: escolhaDoRobo = 'PEDRA'; break;
     case 1: escolhaDoRobo = 'PAPEL'; break;
     case 2: escolhaDoRobo = 'TESOURA'; break;
     case 3: escolhaDoRobo = 'LAGARTO'; break;
     case 4: escolhaDoRobo = 'SPOCK'; break;   

   }

   var resultado = '';
   
   if(escolhaDoRobo == 'PEDRA'){
     resultado = 'EMPATE!!';
     if(escolhaUsuario == 'LAGARTO' || escolhaUsuario == 'TESOURA'){
       resultado = 'Robô Venceu!!!';
     }
     if(escolhaUsuario == 'SPOCK' || escolhaUsuario == 'PAPEL'){
       resultado = 'Você Venceu!!!';
     }
   }

   if(escolhaDoRobo == 'PAPEL'){
     resultado = 'EMPATE!!';
     if(escolhaUsuario == 'SPOCK' || escolhaUsuario == 'PEDRA'){
       resultado = 'Robô Venceu!!!';
     }
     if(escolhaUsuario == 'LAGARTO' || escolhaUsuario == 'TESOURA'){
       resultado = 'Você Venceu!!!';
     }
   }

   if(escolhaDoRobo == 'TESOURA'){
     resultado = 'EMPATE!!';
     if(escolhaUsuario == 'PAPEL' || escolhaUsuario == 'LAGARTO'){
       resultado = 'Robô Venceu!!!';
     }
     if(escolhaUsuario == 'PEDRA' || escolhaUsuario == 'SPOCK'){
       resultado = 'Você Venceu!!!';
     }
   }

   if(escolhaDoRobo == 'LAGARTO'){
     resultado = 'EMPATE!!';
     if(escolhaUsuario == 'SPOCK' || escolhaUsuario == 'PAPEL'){
       resultado = 'Robô Venceu!!!';
     }
     if(escolhaUsuario == 'TESOURA' || escolhaUsuario == 'PEDRA'){
       resultado = 'Você Venceu!!!';
     }
   }

   if(escolhaDoRobo == 'SPOCK'){
     resultado = 'EMPATE!!';
     if(escolhaUsuario == 'PEDRA' || escolhaUsuario == 'TESOURA'){
       resultado = 'Robô Venceu!!!';
     }
     if(escolhaUsuario == 'LAGARTO' || escolhaUsuario == 'PAPEL'){
       resultado = 'Você Venceu!!!';
     }
   }
  
        
    
   this.setState({ escolhaUsuario : escolhaUsuario,
                   escolhaDoRobo : escolhaDoRobo, 
                   resultado : resultado                                  
        });
 }   
 
 
  render() {
    return (
      <View style={styles.container}>

      <Top></Top>
      <Icon></Icon>
        
      <View style={partida.resultados}>
        
          <Text style={partida.txtResultados}>{this.state.resultado}</Text>
          
        </View>

        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    
    
  }
});

const partida = StyleSheet.create({ 
  txtResultados:{
    textAlign:'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#696969'   
   
    
  }
});

