import { Slot } from 'expo-router'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import store from '../src/redux/store'

export default function HomeLayout() {
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <Slot />
      </Provider>
    </>
  )
}
