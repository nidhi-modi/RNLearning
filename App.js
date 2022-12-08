/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity, Text} from 'react-native';
import GoalItem from './components/Goaltem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [getCourseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addGoalHandler(getGoals) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {text: getGoals, id: Math.random().toString()},
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(goal => goal.id !== id);
    });
  }

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  return (
    <View style={styles.appContainer}>
      <TouchableOpacity
        style={styles.buttonStyles}
        onPress={startAddGoalHandler}>
        <Text style={styles.buttonText}>ADD NEW GOAL</Text>
      </TouchableOpacity>

      <GoalInput
        onAddGoal={addGoalHandler}
        visible={modalIsVisible}
        onCancel={endAddGoalHandler}
      />

      <View style={styles.goalsContainer}>
        <FlatList
          data={getCourseGoals}
          renderItem={itemData => (
            <GoalItem
              text={itemData.item.text}
              id={itemData.item.id}
              onDeleteItem={deleteGoalHandler}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 16,
  },

  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#B5838D',
  },

  goalsContainer: {
    marginTop: 20,
    flex: 8,
  },

  buttonStyles: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 14,
    borderRadius: 6,
    backgroundColor: '#5E0ACF',
  },

  buttonText: {
    color: '#ffffff',
  },
});
