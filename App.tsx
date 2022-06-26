import { StatusBar } from "react-native";
import React from "react";
import Restaurants from "./src/screens/Restaurants.screen";
import styled from "styled-components/native";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/index";
import { useFonts } from "expo-font";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const App: React.FC<{}> = () => {
  const [isOswaldLoaded] = useFonts({
    Oswald_400Regular: require("./assets/fonts/Oswald/static/Oswald-Regular.ttf"),
  });
  const [isLatoLoaded] = useFonts({
    Lato_400Regular: require("./assets/fonts/Lato/Lato-Regular.ttf"),
  });

  if (!isLatoLoaded || !isOswaldLoaded) {
    return null;
  }
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
