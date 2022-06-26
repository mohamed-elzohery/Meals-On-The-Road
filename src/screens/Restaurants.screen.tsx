import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import RestaurantInfo from "../components/restaurants/RestaurantInfo";
import styled from "styled-components/native";
import { StyledProps } from "../../types";

const SearchContainer = styled.View`
  background-color: #fff;
  padding: ${(props: StyledProps) => props.theme.space[3]};
`;

const ListContainer = styled.View`
  padding: ${(props: StyledProps) => props.theme.space[3]};
`;

const Restaurants: React.FC<{}> = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const onChangeSearch: (query: string) => void = (query) => {
    setSearchQuery(query);
  };

  const restaurant = {
    name: "Ahmed Mohamed",
    icon: "https://dfsdfsdfsdf.com",
    photos: ["https://picsum.photos/700"],
    address: "Tanta, Egypt",
    isOpenNow: true,
    rating: 4,
    isClosedTemporarily: true,
  };

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
        <RestaurantInfo restaurant={restaurant} />
      </ListContainer>
    </>
  );
};

export default Restaurants;
