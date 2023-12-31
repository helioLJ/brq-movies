import { Tabs } from 'expo-router'

import { HomeHeader } from '../../src/components/Layout/HomeHeader'

export default function Layout() {
  return (
    <>
      <HomeHeader />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: 'transparent',
            height: 40,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: -40,
            borderTopColor: 'transparent',
            borderBottomWidth: 1,
            borderBottomColor: '#2E2F33',
          },
          tabBarItemStyle: {
            height: '70%',
          },
          tabBarIconStyle: {
            display: 'none',
          },
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: 'bold',
            paddingBottom: 5,
          },
          tabBarActiveTintColor: '#EC8B00',
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Todos os filmes',
          }}
        />

        <Tabs.Screen
          name="favorites"
          options={{
            title: 'Filmes favoritos',
          }}
        />
      </Tabs>
    </>
  )
}
