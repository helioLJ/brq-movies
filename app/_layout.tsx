import { Slot } from 'expo-router'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { QueryClientProvider } from '@tanstack/react-query'

import store from '../src/redux/store'
import { queryClient } from '../src/utils/queryClient'

export default function HomeLayout() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <StatusBar barStyle="dark-content" />
          <Slot />
        </Provider>
      </QueryClientProvider>
    </>
  )
}
