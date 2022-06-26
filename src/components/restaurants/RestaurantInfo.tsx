/* eslint-disable prettier/prettier */
import React from "react";
import { Restaurant } from "../../../types";
import { Card, Paragraph } from "react-native-paper";
import styled from "styled-components/native";
import {StyledProps} from "../../../types";
import StarIcon from "@expo/vector-icons/Ionicons";
import {SvgXml} from "react-native-svg";
import Open from "../../../assets/icons/open";

type Props = {
  restaurant: Restaurant
};


const Title = styled.Text`
  color: ${(props: StyledProps) => props.theme.colors.ui.primary};
  font-size: ${(props: StyledProps) => props.theme.fontSizes.body};
  font-family: ${(props: StyledProps) => props.theme.fonts.heading};
`;

const CoverImage = styled(Card.Cover)`
  padding: ${(props: StyledProps) => props.theme.space[3]};
  background-color: #FFF;
 `;

const Address = styled(Paragraph)`
  font-family: ${(props: StyledProps) => props.theme.fonts.body};
  font-size:  ${(props: StyledProps) => props.theme.fontSizes.caption};
`;

const RestaurantCard = styled(Card)`
  background-color: #FFF;
  border-width: 1px;
  border-color: #CCC;
`;

const CardContent = styled(Card.Content)`
  margin-top: ${(props: StyledProps) => props.theme.space[2]};
`;

const Rating = styled.View`
  flex-direction: row;
  margin: ${(props: StyledProps) => props.theme.space[1]} 0;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center
`;

const OpenContainer = styled.View`
  margin-left: auto;
`;

const ClosedTxt = styled.Text`
  color: red;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-top: ${(props: StyledProps) => props.theme.space[2]};
`;

const RestaurantInfo: React.FC<Props> = ({ restaurant }) => {
  const {photos, name, address, rating, isOpenNow, isClosedTemporarily} = restaurant;
  console.log(restaurant);
  return (
    <RestaurantCard elevation={5}>
      <CoverImage source={{ uri: photos[0] }}/>
      <CardContent>
        <Title>{name}</Title>
        <Row>
        <Rating>
          {new Array(Math.ceil(rating)).fill().map((_, index) => <StarIcon name="star" size={20} color="yellow" key={index}/>)}
        </Rating>
          {isOpenNow && <OpenContainer>
            <SvgXml xml={Open} width={20} height={20} />
          </OpenContainer>}
        </Row>
        <Address>{address}</Address>
        {isClosedTemporarily && <ClosedTxt>Closed Temporarily</ClosedTxt>}
      </CardContent>
    </RestaurantCard>
  );
};

export default RestaurantInfo;
