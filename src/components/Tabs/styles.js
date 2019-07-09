import styled from "styled-components/native";

export const Container = styled.View`
    height: 100px;
    margin-top: 20px;
`;

export const TabContainer = styled.ScrollView.attrs({
    horizontal: true,
    contentContainerStyle: {paddingleft: 10, paddingRight: 20},
    showsHorizontalScrollIndicator: false,
})``;

export const TabItem = styled.View`
    width: 100px;
    height: 100px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
    margin-left: 10px;
    padding: 10px;
    justify-content: space-between;
`;


export const TabText = styled.Text`
    color: #FFF;
    font-size: 13px;
`;
