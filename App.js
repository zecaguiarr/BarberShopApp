import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function App(){
  return(
    
    <View style={styles.centralMenuFun}>
        
        <View >
          <Text style={styles.soum}>sacana</Text>
          
          <Image
           source={require('./android/src/assets/bsmlogo.png')}
            
           style={styles.logoStyle}
           
             />
          <Image
            source={require('./android/src/assets/menu.png')}
          

          />
          
          <Text style={styles.soum}>isso aí</Text>
        
        </View>
        
        <View>
        
       
       <Text style={styles.soum}>Só um teste boy</Text>
       
       <Image
        source={require('./android/src/assets/servico1.png')}
      

        style={styles.backgroundservices}
        />
        <Image
        source={require('./android/src/assets/servico2.png')}
      

        style={styles.backgroundservices}
        />
        <Image
        source={require('./android/src/assets/servico1.png')}
      

        style={styles.backgroundservices}
        />
        <Image
        source={require('./android/src/assets/servico2.png')}
      

        style={styles.backgroundservices}
        />
        
        <Text style={styles.soum}>brbr</Text>
        
        </View>
        
        
      
      </View>
     )
    
}
const styles = StyleSheet.create({
    centralMenuFun:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#E5E5E5'
    },
    
    logoStyle:{
     width:60,
     height:56,
    
    },
    soum:{
      fontSize:20,
      color:'#FF0000'

    },
    backgroundservices:{
      backgroundColor:'#545454',
      borderRadius:10,
      width:60,
      height:56
      
      
    }
   

}); 
