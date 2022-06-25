import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import RestaurantInfo from "../components/restaurants/RestaurantInfo";
import styled from "styled-components/native";

const SearchContainer = styled.View`
  background-color: #fff;
  padding: 16px;
`;

const ListContainer = styled.View`
  padding: 16px 12px;
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
    isClosedTemporarily: false,
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
