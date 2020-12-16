import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MealItem from '../components/MealItem';

import { CATEGORIES, MEALS } from '../data/dummy-data';


const CategoryMealScreen = props => {
  const renderMealItem = itemData => {
    return (
      <MealItem 
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => { //you have to pass in the props.navigation.navigate here in order to get to the next screen.
          props.navigation.navigate(
            {routeName: 'MealDetail',
            params: {
              mealId: itemData.item.id //remember you can call the key whatever tou want here. it's the value that is fixed.
            }}
          )
        }}/>
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
        style={{width: '100%'}}
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