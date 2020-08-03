import React from 'react'
import { SafeAreaView, StyleSheet, ScrollView, StatusBar } from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'
import Tasks from './src/Tasks'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
          <Tasks />
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
})

export default App
