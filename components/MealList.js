import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from '../components/MealItem';

const MealList = props => {
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
              mealId: itemData.item.id, //remember you can call the key whatever tou want here. it's the value that is fixed.
              mealTitle: itemData.item.title //this is the most effective way to pass params 
            }}
          )
        }}/>
    )
  };
  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{width: '100%'}}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MealList;
