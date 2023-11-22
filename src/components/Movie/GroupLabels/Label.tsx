import { Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

interface LabelProps {
  label: string
  text: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any
}

export function Label({ label, text, icon }: LabelProps) {
  return (
    <View className="m-2 h-[76px] w-[156px] justify-between rounded-lg bg-brqTertiary p-2">
      <View className="flex-row items-center gap-2">
        <View className="h-6 w-6 items-center justify-center rounded-full bg-brqNeutral pl-0.5">
          <MaterialIcons name={icon} size={14} color="#EC8B00" />
        </View>
        <Text className="text-brqOrange">{label}</Text>
      </View>
      <Text className="text-xl font-bold text-white">{text}</Text>
    </View>
  )
}
