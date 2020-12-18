import React from 'react';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';

import { CATEGORIES } from '../data/dummy-data';
import { StyleSheet, View } from 'react-native';
import DefaultText from '../components/DefaultText';


const CategoryMealScreen = props => {

  const catId = props.navigation.getParam('categoryId'); // we are pulling this from screen we were just sent from via the navigator, in this case CategoriesScreen // this also takes the param key as a string arg.

  const availableMeals = useSelector(state => state.meals.filteredMeals)

  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
    );

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>Your filtered results returned no meals.</DefaultText>
      </View>
    )
  }  

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

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealScreen;