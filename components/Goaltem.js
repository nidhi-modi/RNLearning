import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';

function GoalItem(props) {
  return (
    <View style={styles.goalsList}>
      <Pressable
        android_ripple={{color: '#5E0ACF'}}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed}) => pressed && styles.pressedItem}>
        <Text style={styles.textStyling}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalsList: {
    marginBottom: 15,
    borderRadius: 6,
    backgroundColor: '#b6A5d4',
  },

  pressedItem: {
    opacity: 0.5,
  },

  textStyling: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 15,
    padding: 9,
  },
});

export default GoalItem;
