import { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

export function MovieDetailsSkeleton() {
  const [loadingText, setLoadingText] = useState<string>('...')

  useEffect(() => {
    // Start the interval
    const intervalId: NodeJS.Timeout = setInterval(() => {
      setLoadingText((prev) =>
        prev === '...' ? '..' : prev === '..' ? '.' : '...',
      )
    }, 500)

    // Clear the interval after 2 seconds
    const timeoutId = setTimeout(() => {
      clearInterval(intervalId)
    }, 5000)

    // Cleanup function to clear both interval and timeout
    return () => {
      clearInterval(intervalId)
      clearTimeout(timeoutId)
    }
  }, []) // Empty dependency array ensures the effect runs once on mount

  return (
    <View className="px-4 py-8">
      <Text className="text-3xl font-bold text-white">{loadingText}</Text>

      <Text className="mt-4 text-sm font-bold text-brqOrange">SINOPSE</Text>

      <Text className="mt-4 text-base text-white">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum possimus
        quaerat ipsam, a quasi cumque magni veniam, quod, odit ipsa magnam!
        Soluta, rerum! Iure nisi deserunt mollitia quisquam dolorem ratione.
      </Text>
    </View>
  )
}
