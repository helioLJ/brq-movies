import { Slot } from 'expo-router'
import { StatusBar } from 'react-native'

export default function HomeLayout() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Slot />
    </>
  )
}
