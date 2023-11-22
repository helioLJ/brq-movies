import { FlatList } from 'react-native'

import { Label } from './Label'

export function GroupLabels() {
  return (
    <FlatList
      className="w-full px-4 py-8"
      data={[
        { id: 1, label: 'Label', text: 'Text', icon: 'favorite' },
        { id: 2, label: 'Label', text: 'Text', icon: 'star' },
        { id: 2, label: 'Label', text: 'Text', icon: 'calendar-today' },
        { id: 3, label: 'Label', text: 'Text', icon: 'notifications' },
      ]}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      renderItem={({ item }) => (
        <Label label={item.label} text={item.text} icon={item.icon} />
      )}
    />
  )
}
