import { Button, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import BRQLogo from "../../assets/icon.png";
import { UsernameInput } from "../components/UsernameInput";
import { useForm } from "react-hook-form";
import { FormDataProps } from "../types/DataFormProps";
import { PasswordInput } from "../components/PasswordInput";
import { useState } from "react";

export function Login() {
    const [loginError, setLoginError] = useState(false);
    const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>();

    function handleSignUp(data: FormDataProps) {
        if (data.username === 'user' && data.password === '123') {
            setLoginError(false)
            // route to /Home
            return
        }

        setLoginError(true)
        return
    }

    return (
        <View className='flex-1 items-center justify-center p-4 w-full'>
            <Image source={BRQLogo} />

            <UsernameInput control={control} errorMessage={errors.username?.message} />
            <PasswordInput control={control} errorMessage={errors.password?.message} />

            {loginError && <Text className="text-red-500 mt-5">Dados inválidos</Text>}

            <TouchableOpacity className="mt-8" onPress={handleSubmit(handleSignUp)}>
                <Text className="text-white">Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}