import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import { Platform } from 'react-native';
import Colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
}


const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: CategoryMealScreen,
  MealDetail: MealDetailScreen
}, {
  defaultStackNavigationOptions: defaultStackNavOptions
});

const FavNavigator = createStackNavigator({
  Favorites: FavoritesScreen,
  MealDetail: MealDetailScreen
}, {
  defaultStackNavigationOptions: defaultStackNavOptions
});


const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator, 
    navigationOptions: {
    tabBarIcon: (tabInfo) => {
      return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
    } 
  },
  tabBarColor: Colors.primaryColor
},
  Favorites: {
    screen: FavNavigator, 
    navigationOptions: {
    tabBarIcon: (tabInfo) => {
      return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
    } 
  },
  tabBarColor: Colors.accentColor
}
}

const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
      activeTintColor: Colors.accentColor,
      shifting: true
    }) 
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor
        }
    });  
    
const FiltersNavigator = createStackNavigator(
  {
  Filters: FiltersScreen
  }, 
  {
    // navigationOptions: {
    //   drawerLabel: 'Select Filters'
    // },
    defaultStackNavigationOptions: defaultStackNavOptions
  }
);


const MainNavigator = createDrawerNavigator({
  MealsFavs: {
    screen: MealsFavTabNavigator,
    navigationOptions: {
      drawerLabel: 'Meals'
    },
  },
  Filters: FiltersNavigator
}, {
  contentOptions: {
    activeTintColor: Colors.accentColor,
    labelStyle: {
      fontFamily: 'open-sans-bold'
    },
  }
});

export default createAppContainer(MainNavigator); // MealsNavigator is now inside the MealsFavTabNavigator and MealsFavTabNavigator start with MealNavigator visible initially. 