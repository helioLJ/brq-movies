import { Tabs } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons'
import { HomeHeader } from '../../src/components/HomeHeader'

export default function Layout() {
  return (
    <>
      <HomeHeader />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: 'transparent',
            borderBlockColor: 'transparent',
            height: 50,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: -40,
          },
          tabBarItemStyle: {
            height: '70%',
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Todos os filmes',
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="home" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="favorites"
          options={{
            title: 'Filmes favoritos',
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="favorite" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  )
}
