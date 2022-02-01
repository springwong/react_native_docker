import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../Entry";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ route, navigation }: Props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <TouchableOpacity style={{
                borderWidth: 1,
                padding: 8,
                borderRadius: 8,
                marginTop: 8,
            }} onPress={
                () => {
                    navigation.navigate("Default")
                }
            }>
                <Text>To Default Screen</Text>
            </TouchableOpacity>
        </View>
    );
}