/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react'
import { Animated } from 'react-native'

export function MovieCardSkeleton() {
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
      className="m-2 h-[228px] w-[156px] rounded-lg bg-brqTertiary"
      style={{
        opacity: pulseAnimation,
      }}
    />
  )
}
