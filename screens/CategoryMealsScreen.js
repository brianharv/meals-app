import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';


import { CATEGORIES, MEALS } from '../data/dummy-data';
import Category from '../models/category';


const CategoryMealScreen = props => {
  
  const renderMealItem = itemData => {
    return (
      <View><Text>{itemData.item.title}</Text></View>
    )
  };

  const catId = props.navigation.getParam('categoryId'); // we are pulling this from screen we were just sent from via the navigator, in this case CategoriesScreen // this also takes the param key as a string arg.

  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
    );
  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
      />
    </View>
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
screen: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
}
});

export default CategoryMealScreen;