import React from 'react';
import { View, Button, Text } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => router.push('/profile')}
      />
      <Button
        title="Flag an incident"
        onPress={() => router.push('/flag')}
      />
      <Button
        title="See all my Flagging History"
        onPress={() => router.push('/History')}
      />
    </View>
  );
}
