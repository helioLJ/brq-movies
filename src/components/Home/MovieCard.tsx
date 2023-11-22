import { router } from 'expo-router'
import { TouchableOpacity, ImageBackground } from 'react-native'

interface MovieCardProps {
  item: {
    id: number
    poster_path: string
  }
}

export function MovieCard({ item }: MovieCardProps) {
  return (
    <TouchableOpacity
      onPress={() => router.replace(`/movie/${item.id}`)}
      className="m-2 h-[228px] w-[156px]"
      testID={`movie-card-${item.id}`}
    >
      <ImageBackground
        source={{
          uri: 'https://image.tmdb.org/t/p/w500/' + item.poster_path,
        }}
        className="flex-1 overflow-hidden rounded-lg"
      />
    </TouchableOpacity>
  )
}
