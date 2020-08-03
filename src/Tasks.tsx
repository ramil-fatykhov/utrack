/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Dimensions, TextInput} from 'react-native';

export interface ITask {
  name: string;
  time: number;
}

const Tasks = () => {
  const [] = React.useState({})

  const onChangeText = (text: string) => {
    console.log(text)
  }

  return (
    <View
      style={{
        height: (1 / 4) * Dimensions.get('screen').height,
        width: '100%',
      }}>
      <TextInput
        autoFocus
        style={{}}
        onChangeText={onChangeText}
        // onEndEditing={onEndEditing}
      />
    </View>
  );
};

export default Tasks;
