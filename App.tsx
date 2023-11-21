import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Login } from './src/screens/Login';

export default function App() {
  return (
    <View className='flex-1 items-center justify-center bg-brqNeutral'>
      <Login />
      <StatusBar style="light" />
    </View>
  );
}