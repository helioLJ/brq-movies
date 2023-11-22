import { Animated } from 'react-native'

interface HeaderTitleProps {
  title: string
  titleOpacity: Animated.AnimatedInterpolation<string | number>
}

export function HeaderTitle({ title, titleOpacity }: HeaderTitleProps) {
  return (
    <Animated.Text
      className={`text-xl text-white`}
      style={{ opacity: titleOpacity }}
    >
      {title.length > 18 ? title.substring(0, 16) + '...' : title}
    </Animated.Text>
  )
}
