import React, { useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import ListItem from '../components/ListItem';
import { toggleFavorite } from '../store/actions/meals-actions';



const MealDetailScreen = props => {

  const availableMeals = useSelector(state => state.meals.meals)
  const mealId = props.navigation.getParam('mealId');
  const currentMealIsFavorite = useSelector(state => 
    state.meals.favoriteMeals.some(meal => meal.id === mealId)
    );

  const selectedMeal = availableMeals.find(meal => meal.id === mealId);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId])

  useEffect(() => {
    props.navigation.setParams({toggleFav: toggleFavoriteHandler});   // setParams adding to params, only overrides if that param already exists
  }, [toggleFavoriteHandler])

  useEffect(() => {
    props.navigation.setParams({isFav: currentMealIsFavorite})
  }, [currentMealIsFavorite]);

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
  // const mealId = navigationData.navigation.getParam('mealId');
  const mealTitle = navigationData.navigation.getParam('mealTitle');
  const toggleFavorite = navigationData.navigation.getParam('toggleFav');
  // const selectedMeal = MEALS.find(meal => meal.id === mealId);
  const isFavorite = navigationData.navigation.getParam('isFav');

  return {
    headerTitle: mealTitle,
    headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item 
        title='Favorite' 
        iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
        onPress={toggleFavorite}
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