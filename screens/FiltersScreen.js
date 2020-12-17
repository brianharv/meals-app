import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import FilterSwitch from '../components/FilterSwitch';

const FiltersScreen = props => {
  
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);


  return (
    <View style={styles.screen}>
      <Text style={styles.title}> Available Filters</Text>
      <FilterSwitch
        label='Gluten-Free'
        state={isGlutenFree}  
        onChange={newValue => setIsGlutenFree(newValue)}
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
      )  
  };
}; 

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  // filterContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   width: '80%'
  // },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center'
  }
});

export default FiltersScreen;