import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderTitle } from 'react-navigation-stack';

const FiltersScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Filters Screen</Text>
    </View>
  )
};

FiltersScreen.navigationOptions = ({
  headerTitle: 'Filter Meals'
});

const styles = StyleSheet.create({
screen: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
}
});

export default FiltersScreen;