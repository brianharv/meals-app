import React from 'react';
import { } from 'react-native';
import MealList from '../components/MealList';

import { CATEGORIES, MEALS } from '../data/dummy-data';


const CategoryMealScreen = props => {
  const catId = props.navigation.getParam('categoryId'); // we are pulling this from screen we were just sent from via the navigator, in this case CategoriesScreen // this also takes the param key as a string arg.
  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
    );
  return (
    <MealList listData={displayedMeals} navigation={props.navigation} />
  )
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return {
    headerTitle: selectedCategory.title
  };
};


export default CategoryMealScreen;