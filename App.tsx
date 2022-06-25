import { StatusBar } from "react-native";
import React from "react";
import Restaurants from "./src/screens/Restaurants.screen";
import styled from "styled-components/native";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/index";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const App: React.FC<{}> = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar backgroundColor="red" barStyle="light-content" />
        <Restaurants />
      </Container>
    </ThemeProvider>
  );
};

export default App;
