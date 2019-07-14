import React from 'react';

import Icon from "react-native-vector-icons/MaterialIcons";
import { Animated } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";

import Header from "~/components/Header";
import Tabs from "~/components/Tabs";
import Menu from "~/components/Menu";


import { Container, Content, Card, CardHeader, CardContent, Title, Description, CardFooter, Annotation } from './styles';

export default function Main() {
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY:  translateY,
        }
      }
    ], 
    {useNativeDrive: true},
  )

  function onHandlerStateChange(event) {

  }


  return (
    <Container>
      <Header />

      <Content>
        <Menu />

      <PanGestureHandler
        onGestureEvent = {animatedEvent}
        onHandlerStateChange = {onHandlerStateChange}
      >
        <Card style={{
          transform: [{
            translateY: translateY.interpolate({
              inputRange: [-200, 0, 380],
              outputRange: [-50 ,0, 380],
              extrapolate: 'clamp'
            }),
          }],
        }}>
          <CardHeader>
          <Icon name="attach-money" size={28} color="#666" />
          <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>FATURA ATUAL</Title>
            <Description>R$ 7.887,87</Description>
            <Title>Limite disponível: R$ 500,00</Title>
          </CardContent>
          <CardFooter>
            <Annotation>
              Tranferência de R$ 20,00 recebida hoje as 10:00 horas.
            </Annotation>
          </CardFooter>
        </Card>
        </PanGestureHandler>

      </Content>

      <Tabs />
    </Container>
  );
}