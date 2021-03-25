import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const InputArea = styled.View`
    width: 100%;
    height:60px;
    background-color: #7A7A7A
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
`;
const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    margin-left:10px;

`;

export default ({IconSvg, placeholder, value, onChangeText, password}) => {
    return (
        <InputArea>
            <IconSvg width="24" height="24" fill=""/>
            <Input 
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
                
            />
        </InputArea>
    );
}
/*export const VerificarSenha = () => 
{while (passwordField != confirmpasswordField) {
            return(
                confirmpasswordField = styled.Text`
                color: #FF0000`);
                    
                
                
        }
             
        
     
}*/
