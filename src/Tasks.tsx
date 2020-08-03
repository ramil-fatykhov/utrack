import React from 'react'
import { StyleSheet, View, Text, Dimensions, TextInput, Button } from 'react-native'

export interface ITask {
  name: string
  time: number
}

const Tasks = () => {
  const [tasks, updatedTasksList] = React.useState<ITask[]>([])
  const [task, setTask] = React.useState<ITask>({
    name: '',
    time: 0,
  })

  const onChangeText = (text: string) => {
    setTask({ name: text, time: 0 })
  }

  const createNewTask = () => {
    updatedTasksList((currentList) => [...currentList, task])
  }

  return (
    <View>
      <View
        style={{
          height: (1 / 4) * Dimensions.get('screen').height,
          width: '100%',
          padding: 16,
        }}
      >
        <TextInput
          autoFocus
          placeholder="Task name"
          defaultValue=""
          style={{
            padding: 8,
            borderWidth: 2,
            borderRadius: 50,
            borderColor: 'rgba(0,0,0,.54)',
          }}
          onChangeText={onChangeText}
        />
        <Button onPress={createNewTask} title="new task" />
      </View>
      <View>
        {tasks.map((elem, key) => (
          <View
            key={key}
            style={{
              width: '100%',
              padding: 16,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <View>
              <Text>Task: {elem.name}</Text>
              <Text>Time: {elem.time}</Text>
            </View>
            <Text
              style={{
                backgroundColor: 'red',
                borderRadius: 40,
                height: 32,
                width: 32,
                textAlign: 'center',
                textAlignVertical: 'center',
                color: '#fff',
              }}
            >
              X
            </Text>
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  scrollView: {},
})

export default Tasks
