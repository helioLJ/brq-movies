import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Control, Controller } from "react-hook-form";
import Ionicons from "@expo/vector-icons/FontAwesome"
import { FormDataProps } from "../types/DataFormProps";
import { useRef, useState } from "react";

interface UsernameInputProps {
    control: Control<FormDataProps>
    errorMessage: string
}

export function UsernameInput({ control, errorMessage }: UsernameInputProps) {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const inputRef = useRef<TextInput>(null);

    return (
        <View className="flex-col items-center mb-4 w-[380px] px-4">
            <View className={`flex relative rounded-md border-b mb-4 flex-row h-14 w-full justify-between items-center px-4 bg-brqTertiary ${isFocused || inputValue ? 'border-brqOrange' : errorMessage ? 'border-red-500' : 'border-white'}`}>
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
                                className={`color-white px-3 w-full h-full`}
                                value={value}
                                onChangeText={(text) => {
                                    setInputValue(text);
                                    onChange(text);
                                }}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                                ref={inputRef}
                            />

                            <Text onPress={() => inputRef.current.focus()} className={`absolute pointer-events-none left-11 text-zinc-300 transition-transform ${isFocused || inputValue ? '-translate-y-4 text-xs text-brqOrange' : ''}`}>
                                Usuário
                            </Text>

                            {inputValue ? (
                            <TouchableOpacity className="-translate-x-9" onPress={() => {
                                onChange('')
                                setInputValue('')
                            }}>
                                <Ionicons name="close" size={24} color="white" />
                            </TouchableOpacity>
                            ) : null}
                        </>
                    )}
                />
                
            </View>
            <Text className=" text-red-500">{errorMessage} </Text>
        </View>
    )
}