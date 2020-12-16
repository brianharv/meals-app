import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoryMealScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen</Text>
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

const styles = StyleSheet.create({
screen: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
}
});

export default CategoryMealScreen;