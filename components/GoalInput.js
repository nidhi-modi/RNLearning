import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

function GoalInput(props) {
  const [getGoals, setGoals] = useState('');

  function goalInputHandler(inputValue) {
    setGoals(inputValue);
  }

  function addGoalHandler() {
    props.onAddGoal(getGoals);
    setGoals('');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your goals here"
        onChangeText={text => goalInputHandler(text)}
        value={getGoals}
      />
      <TouchableOpacity style={styles.buttonStyles} onPress={addGoalHandler}>
        <Text style={styles.buttonText}>ADD GOALS</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 10,
    padding: 10,
    borderRadius: 6,
  },

  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },

  buttonStyles: {
    justifyContent: 'center',
    padding: 14,
    borderRadius: 6,
    backgroundColor: '#2295F5',
  },

  buttonText: {
    color: '#ffffff',
  },
});

export default GoalInput;
