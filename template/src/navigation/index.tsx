import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { EmptyScreen } from "#screens";

const { Navigator, Screen } = createStackNavigator();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="EmptyScreen" component={EmptyScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
