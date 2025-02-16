import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import InfoScreen from "./screens/InfoScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const iconNames = {
              Início: "home-outline",
              Favorito: "heart-outline",
              "Calendário de Lutas": "calendar-outline",
            };
            return (
              <Ionicons
                name={iconNames[route.name]}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen name="Início" component={HomeScreen} />
        <Tab.Screen name="Favorito" component={FavoriteScreen} />
        <Tab.Screen name="Calendário de Lutas" component={InfoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
