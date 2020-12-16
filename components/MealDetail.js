import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const MealDetail = props => {
  return (
    <View style={styles.screen}>
      <Text>Meal Detail Screen</Text>
      <Button 
        title="Go Back to Categories"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({});

export default MealDetail;