import React from "react";
import { Button, TouchableOpacity,View, Text, Image } from "react-native";
import { createStackNavigator } from "react-navigation";
import RestaurantsScreen from "../components/Restaurants";
import DishesScreen from "../components/Dishes";
import CartScreen from "../components/Cart";
import drawerNavigator from './drawerNavigator'
import CategoriesScreen from '../components/Categories'

const stackNavigator = createStackNavigator({
  Restaurants: {
    screen: RestaurantsScreen,
    navigationOptions: {
      title: "Food Shop"
    }
  },
  Categories: {
    screen: CategoriesScreen,
    navigationOptions: {
      title: "Categories"
    }
  },
  Dishes: {
    screen: DishesScreen,
    navigationOptions: {
      title: "Dishes"
    }
  },
  Cart: {
    screen: CartScreen,
    navigationOptions: {
      title: "Cart",
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0
      }
    }
  }
});

export default stackNavigator;
