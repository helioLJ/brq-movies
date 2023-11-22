/* eslint-disable @typescript-eslint/no-explicit-any */
import { Animated } from 'react-native'
import { BackButton } from './BackButton'
import { HeaderTitle } from './HeaderTitle'
import { FavoriteButton } from './FavoriteButton'

interface StickyHeaderProps {
  headerBackgroundColor: Animated.AnimatedInterpolation<string | number>
  headerTranslateY: Animated.AnimatedInterpolation<string | number>
  backBackgroundColor: Animated.AnimatedInterpolation<string | number>
  titleOpacity: Animated.AnimatedInterpolation<string | number>
  title: string
  movieId: number
}

export function StickyHeader({
  headerBackgroundColor,
  headerTranslateY,
  backBackgroundColor,
  titleOpacity,
  title,
  movieId,
}: StickyHeaderProps) {
  return (
    <Animated.View
      className="absolute z-10 h-24 w-full flex-1 flex-row items-center justify-between px-4 pb-4 pt-10"
      style={{
        backgroundColor: headerBackgroundColor,
        transform: [{ translateY: headerTranslateY }],
      }}
    >
      <BackButton backBackgroundColor={backBackgroundColor} />

      <HeaderTitle title={title} titleOpacity={titleOpacity} />

      <FavoriteButton movieId={movieId} />
    </Animated.View>
  )
}
