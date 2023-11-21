import { Tabs } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons'

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#2E2F33', // Specify your desired background color here
          height: 50,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
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
  )
}
