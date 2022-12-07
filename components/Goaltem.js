import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

function GoalItem(props) {
  return (
    <View style={styles.goalsList}>
      <Text style={styles.textStyling}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goalsList: {
    marginBottom: 15,
    borderRadius: 6,
    padding: 9,
    backgroundColor: '#b6a5d4',
  },

  textStyling: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 15,
  },
});

export default GoalItem;
