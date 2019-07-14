import React from 'react';
import Icon from "react-native-vector-icons/MaterialIcons";

import { Container, Code, Nav, NavItem, NavText, BotaoSair, TextoSair}  from "./styles";

export default function Menu() {
    return (
        <Container>
            <Code>
                <Icon name="view-comfy" size={80} color="#8B10AE"/>
            </Code>

            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#fff"/>
                    <NavText>Me ajuda</NavText>
                </NavItem>

                <NavItem>
                    <Icon name="person-outline" size={20} color="#fff"/>
                    <NavText>Perfil</NavText>
                </NavItem>

                <NavItem>
                    <Icon name="credit-card" size={20} color="#fff"/>
                    <NavText>Configuração do cartão ajuda</NavText>
                </NavItem>

                <NavItem>
                    <Icon name="smartphone" size={20} color="#fff"/>
                    <NavText>Configuração do app</NavText>
                </NavItem>
            </Nav>

            <BotaoSair onPress={() => {}}>
                <TextoSair>Sair do app</TextoSair>
            </BotaoSair>
        </Container>
    );
}