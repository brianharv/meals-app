import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


import { CATEGORIES } from '../data/dummy-data';


const CategoryMealScreen = props => {

  const catId = props.navigation.getParam('categoryId'); // we are pulling this from screen we were just sent from via the navigator, in this case CategoriesScreen // this also takes the param key as a string arg.

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button title="Meal Details"
        onPress={() => {
          props.navigation.navigate('MealDetail') // alt syntax
          }}
        />
      <Button title="Got Back" onPress={() => {
        props.navigation.goBack(); //could also use pop() but only if in stacknavigator
      }}
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