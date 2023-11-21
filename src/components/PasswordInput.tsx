import Ionicons from "@expo/vector-icons/FontAwesome"
import { Control, Controller } from "react-hook-form";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { FormDataProps } from "../types/DataFormProps";

interface PasswordInputProps {
    control: Control<FormDataProps>
    errorMessage: string
}

export function PasswordInput({ control, errorMessage }: PasswordInputProps) {

    return (
        <View className={`flex relative rounded-md border-b flex-row h-14 w-full justify-between items-center px-4 bg-brqTertiary ${errorMessage ? 'border-red-500' : 'border-white'}`}>
            <Ionicons className="w-6" name="lock" size={24} color="white"  />
            
            <Controller
                control={control}
                name="password"
                rules={{
                    required: 'Informe a senha',
                    pattern: {
                        message: 'Apenas números permitidos',
                        value: /^[0-9]+$/
                    }
                }}
                render={({ field: { onChange, value } }) => (
                    <>
                        <TextInput
                            placeholder="Senha"
                            placeholderTextColor="white"
                            className="mx-3 text-white w-4/5 h-full"
                            onChangeText={onChange}
                            value={value}
                            // keyboardType="numeric"
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