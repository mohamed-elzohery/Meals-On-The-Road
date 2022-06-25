/* eslint-disable prettier/prettier */
import React from "react";
import { Restaurant } from "../../../types";
import { Card, Paragraph } from "react-native-paper";
import styled from "styled-components/native";

type Props = {
  restaurant: Restaurant
};

const Title = styled.Text`
  color: #FF0000;
  font-size: 20px;
`;

const CoverImage = styled(Card.Cover)`
  padding: 12px;
  background-color: #FFF;
 `;

const RestaurantCard = styled(Card)`
  background-color: #FFF;
  border-width: 1px;
  border-color: #CCC;
`;

const RestaurantInfo: React.FC<Props> = ({ restaurant }) => {
  const {photos, name} = restaurant;
  console.log(restaurant);
  return (
    <RestaurantCard elevation={5}>
      <CoverImage source={{ uri: photos[0] }}/>
      <Card.Content>
        <Title>{name}</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
    </RestaurantCard>
  );
};

export default RestaurantInfo;
