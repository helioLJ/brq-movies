import { router } from 'expo-router'
import { TouchableOpacity, Animated } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

interface FavoriteButtonProps {
  backBackgroundColor: Animated.AnimatedInterpolation<string | number>
}

export function BackButton({ backBackgroundColor }: FavoriteButtonProps) {
  return (
    <TouchableOpacity
      className="flex h-6 w-6 items-center justify-center rounded-full"
      style={{
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        backgroundColor: backBackgroundColor as any,
      }}
      onPress={() => router.replace('/home')}
    >
      <MaterialIcons name="arrow-back" size={16} color="white" />
    </TouchableOpacity>
  )
}
