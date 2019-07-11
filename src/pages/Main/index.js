import React from 'react';
import Icon from "react-native-vector-icons/MaterialIcons";

import Header from "~/components/Header";
import Tabs from "~/components/Tabs";

import { Container, Content, Card, CardHeader, CardContent, Title, Description, CardFooter, Annotation } from './styles';

export default function Main() {
  return (
    <Container>
      <Header />

      <Content>
        <Card>
          <CardHeader>
          <Icon name="attach-money" size={28} color="#666" />
          <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Saldo Disponível</Title>
            <Description>R$ 7.887,87</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Tranferência de R$ 20,00 recebida hoje as 10:00 horas.
            </Annotation>
          </CardFooter>
        </Card>
      </Content>

      <Tabs />
    </Container>
  );
}