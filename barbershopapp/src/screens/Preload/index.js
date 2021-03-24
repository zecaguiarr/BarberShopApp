import React from 'react';
import { Container, LoadingIcon } from './styles';
import AsyncStorage from '@react-native-community/async-storage';

import BarberLogo from '../../assets/barberlogo.svg'

export default () => {
    return (
        <Container>
            <BarberLogo height="270"/>
            <LoadingIcon size="large" color="#454545" />
        </Container>
    );
}