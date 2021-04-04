import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../screens/Preload';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import MenuPrincipal from '../screens/MenuPrincipal'
import AgendamentoCliente from '../screens/AgendamentoCliente'
import AtualizacaoPerfilCliente from '../screens/AtualizacaoPerfilCliente'
import AvaliacaoCliente from '../screens/AvaliacaoCliente'
import NotificacaoPagamento from '../screens/NotificaçãoPagamento'
import PerfilCliente from '../screens/PerfilCliente'
import TabelaFuncionarios from '../screens/TabelaFuncionarios'
const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="MenuPrincipal" component={MenuPrincipal} />
        <Stack.Screen name="AgendamentoCliente" component={AgendamentoCliente} />
        <Stack.Screen name="AtualizacaoPerfilCliente" component={AtualizacaoPerfilCliente} />
        <Stack.Screen name="AvaliacaoCliente" component={AvaliacaoCliente} />
        <Stack.Screen name="NotificacaoPagamento" component={NotificacaoPagamento} />
        <Stack.Screen name="PerfilCliente" component={PerfilCliente} />
        <Stack.Screen name="TabelaFuncionarios" component={TabelaFuncionarios} />
    </Stack.Navigator>
);