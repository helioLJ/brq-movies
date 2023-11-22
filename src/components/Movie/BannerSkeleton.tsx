/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect } from 'react'
import { Animated } from 'react-native'

export function BannerSkeleton() {
  const pulseAnimation = useRef(new Animated.Value(1)).current

  const pulse = () => {
    Animated.sequence([
      Animated.timing(pulseAnimation, {
        toValue: 0.5,
        duration: 700,
        useNativeDriver: false,
      }),
      Animated.timing(pulseAnimation, {
        toValue: 1,
        duration: 700,
        useNativeDriver: false,
      }),
    ]).start(() => pulse())
  }

  useEffect(() => {
    pulse()
  }, [])

  return (
    <Animated.View
      className="h-[500px] w-full bg-brqTertiary"
      style={{
        opacity: pulseAnimation,
      }}
    />
  )
}
