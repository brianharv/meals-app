import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import Colors from '../constants/Colors';

const FilterSwitch = props => {

  return (
  <View style={styles.filterContainer}>
    <Text>{props.label}</Text>
      <Switch 
        trackColor={{true: Colors.primaryColor}} 
        value={props.state} 
        onValueChange={props.onChange}
      />
  </View>
  )
}

const styles = StyleSheet.create({

  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%'
  },
  // label: {
  //   fontFamily: 'open-sans-bold',
  //   fontSize: 22,
  //   margin: 20,
  //   textAlign: 'center'
  // }
});

export default FilterSwitch;