import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
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


import SignInput from '../../components/SignInput'

import BarberLogo from '../../assets/barberlogo.svg';
import PersonIcon from '../../assets/person.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg'
import { Alert } from 'react-native';

export default () => {

    const navigation = useNavigation();

    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [confirmpasswordField, setConfirmPasswordField] = useState('')

    const handleSignClick = () => {
        if (confirmpasswordField == passwordField)
            navigation.reset({
                routes: [{ name: 'MenuPrincipal' }]
            });
        else
            Alert.alert("Confira sua senha")

    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{ name: 'SignIn' }]
        });
    }

    return (

        <Container>
            <BarberLogo height="245" />

            <Arrumar>
                <InputArea>
                    <SignInput
                        IconSvg={PersonIcon}
                        placeholder="Digite seu nome"
                        value={nameField}
                        onChangeText={t => setNameField(t)}
                    />

                    <SignInput
                        IconSvg={EmailIcon}
                        placeholder="Digite seu e-mail"
                        value={emailField}
                        onChangeText={t => setEmailField(t)}
                    />

                    <SignInput
                        IconSvg={LockIcon}
                        placeholder="Digite sua senha"
                        value={passwordField}
                        onChangeText={t => setPasswordField(t)}
                        password={true}
                    />

                    <SignInput
                        IconSvg={LockIcon}
                        placeholder="Confirme sua senha"
                        value={confirmpasswordField}
                        onChangeText={t => setConfirmPasswordField(t)}
                        password={true}
                        VerificarSenha={true}
                    />


                    <CustomButton

                        onPress={handleSignClick}
                    >
                        <CustomButtonText>CADASTRAR</CustomButtonText>
                    </CustomButton>
                </InputArea>

                <LogIn>
                    <SignMessageButton onPress={handleMessageButtonClick}>
                        <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
                        <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
                    </SignMessageButton>
                </LogIn>
            </Arrumar>
        </Container>
    );
}
