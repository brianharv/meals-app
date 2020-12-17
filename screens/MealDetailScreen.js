import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useSelector } from 'react-redux';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import ListItem from '../components/ListItem';


const MealDetailScreen = props => {

  const availableMeals = useSelector(state => state.meals.meals)

  const mealId = props.navigation.getParam('mealId');

  const selectedMeal = availableMeals.find(meal => meal.id === mealId);

  // useEffect(() => {
  //   props.navigation.setParams({mealTitle: selectedMeal.title});   // setParams adding to params, only overrides if that param already exists
  // }, [selectedMeal])

  return (
    <ScrollView>
      <Image  source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient, index) => (
      <ListItem key={index}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step, index) => (
        <ListItem key={index}>{step}</ListItem>
      ))}
    </ScrollView>
  )
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam('mealId');
  const mealTitle = navigationData.navigation.getParam('mealTitle')
  // const selectedMeal = MEALS.find(meal => meal.id === mealId);


  
  return {
    headerTitle: mealTitle,
    headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item 
        title='Favorite' 
        iconName='ios-star-outline'
        onPress={() => {
          console.log('this star works')
        }}
      /> 
    </HeaderButtons>
  };
}

const styles = StyleSheet.create({
image: {
  width: '100%',
  height: 200
},
details: {
  flexDirection: 'row',
  padding: 15,
  justifyContent: 'space-around'
},
title: {
  fontFamily: 'open-sans-bold',
  fontSize: 22,
  textAlign: 'center'
}
});

export default MealDetailScreen;