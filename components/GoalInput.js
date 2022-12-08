import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Modal,
  Dimensions,
  Image,
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
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.imageStyling}
          source={require('../assets/goal.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your goals here"
          onChangeText={text => goalInputHandler(text)}
          value={getGoals}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonStylesCancel}
            onPress={props.onCancel}>
            <Text style={styles.buttonText}>CANCEL</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyles}
            onPress={addGoalHandler}>
            <Text style={styles.buttonText}>ADD GOALS</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    backgroundColor: '#ffffff',
    borderColor: '#e4d0ff',
    width: '100%',
    padding: 14,
    borderRadius: 6,
    color: '#120438',
  },

  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },

  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },

  buttonStyles: {
    width: Dimensions.get('window').width / 3,
    justifyContent: 'center',
    padding: 14,
    borderRadius: 6,
    backgroundColor: '#2295F5',
    marginHorizontal: 20,
    alignItems: 'center',
  },

  buttonStylesCancel: {
    width: Dimensions.get('window').width / 3,
    justifyContent: 'center',
    padding: 14,
    borderRadius: 6,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    marginHorizontal: 20,
  },

  buttonText: {
    color: '#ffffff',
  },

  imageStyling: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default GoalInput;
