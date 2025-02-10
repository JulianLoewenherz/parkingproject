// app/index.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the Parking Enforcement App</Text>
      <Button
        title="about us"
        onPress={() => router.push("/about")}
      />
      <Button
        title="login"
        onPress={() => router.push("/login")}
      />
      <Button
        title="Create Account"
        onPress={()=> router.push("/createAccount")}
      />
    </View>
  );
}
