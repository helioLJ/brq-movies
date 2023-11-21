import Ionicons from "@expo/vector-icons/FontAwesome"
import { Control, Controller } from "react-hook-form";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { FormDataProps } from "../types/DataFormProps";

interface UsernameInputProps {
    control: Control<FormDataProps>
    errorMessage: string
}

export function UsernameInput({ control, errorMessage }: UsernameInputProps) {

    return (
        <View className={`flex relative rounded-md border-b mb-8 flex-row h-14 w-full justify-between items-center px-4 bg-brqTertiary ${errorMessage ? 'border-red-500' : 'border-white'}`}>
            <Ionicons className="w-6" name="user" size={24} color="white"  />
            
            <Controller
                control={control}
                name="username"
                rules={{
                    required: 'Informe o username',
                }}
                render={({ field: { onChange, value } }) => (
                    <>
                        <TextInput
                            placeholder="Usuário"
                            placeholderTextColor="white"
                            className="mx-3 text-white w-4/5 h-full"
                            onChangeText={onChange}
                            value={value}
                        />

                        <TouchableOpacity className="w-6" onPress={() => onChange('')}>
                            <Ionicons name="close" size={24} color="white" />
                        </TouchableOpacity>
                    </>
                )}
            />
            
            <Text className="absolute -bottom-6 left-1/2 -translate-x-[70px] text-red-500">{errorMessage}</Text>
        </View>
    )
}