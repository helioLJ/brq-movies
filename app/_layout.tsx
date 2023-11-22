import { Slot } from 'expo-router'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { QueryClientProvider } from '@tanstack/react-query'

import store from '../src/redux/store'
import { queryClient } from '../src/utils/queryClient'

if (__DEV__) {
  const ignoreWarns = [
    'VirtualizedLists should never be nested inside plain ScrollViews',
  ]

  const errorWarn = global.console.error
  global.console.error = (...arg) => {
    for (const error of ignoreWarns) {
      if (arg[0].startsWith(error)) {
        return
      }
    }
    errorWarn(...arg)
  }
}

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
