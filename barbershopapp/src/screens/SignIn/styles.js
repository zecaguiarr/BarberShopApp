import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #C3C3C3;
    flex: 1;
    justify-content: center;
    align-items: center;
`;
export const InputArea = styled.View`
    width: 100%;
    padding: 40px;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #545454;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`;
export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #F2F2F2;
`;

export const SignMessageButton = styled.TouchableOpacity`
    flex-direction row;
    justify-content; center;
    margin-top: 50px;
    margin-bottom: 20px;

`;
export const SignMessageButtonText = styled.Text`
    font-size: 16px;
    color: #000000;
`;
export const SignMessageButtonTextBold = styled.Text`
    font-size: 16px;
    color: #000000;
    font-weight: bold;
    margin-left: 54px;
    
`;