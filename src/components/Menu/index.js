import React from 'react';
import Icon from "react-native-vector-icons/MaterialIcons";

import { Container, Code}  from "./styles";

export default function Menu() {
    return (
        <Container>
            <Code>
                <Icon name="view-comfy" size={80} color="#FFF"/>
            </Code>
        </Container>
    );
}