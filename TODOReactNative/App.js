import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/Header';
import { TodoAdd } from './src/TodoAdd';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title='TODO App' />
      <TodoAdd />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
