import { Button, Image, Text, TextInput, View } from "react-native";
import BRQLogo from "../../assets/icon.png";

export function Login() {
    return (
        <View>
            <Image source={BRQLogo} />
            <TextInput placeholder="Usuário" placeholderTextColor="white" className="" />
            <TextInput placeholder="Usuário" placeholderTextColor="white" className="" />
            <Button title="Entrar" />
            <Button title="Esqueci a senha" />
        </View>
    )
}