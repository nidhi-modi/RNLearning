/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import GoalItem from './components/Goaltem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [getCourseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(getGoals) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {text: getGoals, id: Math.random().toString()},
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />

      <View style={styles.horizontalLine}></View>

      <View style={styles.goalsContainer}>
        <FlatList
          data={getCourseGoals}
          renderItem={itemData => <GoalItem text={itemData.item.text} />}
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
});
