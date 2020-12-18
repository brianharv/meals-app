import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import FilterSwitch from '../components/FilterSwitch';
import { useDispatch } from 'react-redux';
import { setFilters } from '../store/actions/meals-actions';


const FiltersScreen = props => {
  const { navigation } = props;

  const dispatch = useDispatch();

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
      lactoseFree: isLactoseFree
    };

     dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

  useEffect(() => {
    navigation.setParams({save: saveFilters}); //just pointing at it, don't call it (no parens)
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}> Available Filters</Text>
      <FilterSwitch
        label='Gluten-Free'
        state={isGlutenFree}  
        onChange={newValue => setIsGlutenFree(newValue)} //We send onChange with an updated value to the FilterSwitch prop as props.onValueChange
        />
      <FilterSwitch
        label='Lactose-Free'
        state={isLactoseFree}  
        onChange={newValue => setIsLactoseFree(newValue)}
        />
      <FilterSwitch
        label='Vegan'
        state={isVegan}  
        onChange={newValue => setIsVegan(newValue)}
        />
      <FilterSwitch
        label='Vegetarian'
        state={isVegetarian}  
        onChange={newValue => setIsVegetarian(newValue)}
        />
    </View>
  )
};

FiltersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Meal Filters',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Menu" iconName='ios-menu' onPress={() => {
          navData.navigation.toggleDrawer()
        }}
        />
      </HeaderButtons>
      ),  
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Save" iconName='ios-save' onPress={navData.navigation.getParam('save')}
        />
      </HeaderButtons>
      )  
  };
}; 

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center'
  }
});

export default FiltersScreen;