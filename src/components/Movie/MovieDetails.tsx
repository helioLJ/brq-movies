import { View, Text } from 'react-native'

interface MovieDetailsProps {
  title: string
  overview: string
}

export function MovieDetails({ title, overview }: MovieDetailsProps) {
  return (
    <View className="px-4 py-8">
      <Text className="text-3xl font-bold text-white">{title}</Text>

      <Text className="mt-4 text-sm font-bold text-brqOrange">SINOPSE</Text>

      <Text className="mt-4 text-base text-white">{overview}</Text>
    </View>
  )
}
