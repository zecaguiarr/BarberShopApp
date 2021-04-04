import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { Text, View } from 'react-native'
import { 
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold,
    LogIn,
    Arrumar,
   

    
    
} from './styles';


import BarberLogo from '../../assets/barberlogo.svg';


export default () => {
    return (
      
        <Container>
            <View><Text>Menu Principal</Text></View>
            <BarberLogo height="245"/>
            
        </Container>
        
    );
}
