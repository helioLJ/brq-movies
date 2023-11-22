/* eslint-disable camelcase */
import { View, ImageBackground } from 'react-native'

interface BannerProps {
  poster_path: string
}

export function Banner({ poster_path }: BannerProps) {
  return (
    <View className="h-[500px] w-full">
      <ImageBackground
        source={{
          uri: 'https://image.tmdb.org/t/p/w500/' + poster_path,
        }}
        className="flex-1"
      />
    </View>
  )
}
