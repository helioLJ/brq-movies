import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function HomeLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Slot />
    </>
  )
}
