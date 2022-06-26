import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import RestaurantInfo from "../components/restaurants/RestaurantInfo";
import styled from "styled-components/native";
import { StyledProps } from "../../types";
import { FlatList } from "react-native";

const SearchContainer = styled.View`
  background-color: #fff;
  padding: ${(props: StyledProps) => props.theme.space[3]};
`;

const ListContainer = styled.View`
  margin: ${(props: StyledProps) => props.theme.space[2]}
    ${(props: StyledProps) => props.theme.space[3]};
`;

const Restaurants: React.FC<{}> = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const onChangeSearch: (query: string) => void = (query) => {
    setSearchQuery(query);
  };

  const restaurant = {
    name: "El Watanya Food Restaurant",
    icon: "https://dfsdfsdfsdf.com",
    photos: ["https://picsum.photos/700"],
    address: "Tanta, Egypt",
    isOpenNow: true,
    rating: 4,
    isClosedTemporarily: true,
  };
  //  Temporary Code
  const allRestaurats = new Array(10).fill(restaurant).map((item, index) => {
    item.id = index.toString();
    return item;
  });

  return (
    <>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <ListContainer>
        <FlatList
          data={allRestaurats}
          renderItem={({ item }) => <RestaurantInfo restaurant={item} />}
          keyExtractor={({ id }) => id}
        />
      </ListContainer>
    </>
  );
};

export default Restaurants;
