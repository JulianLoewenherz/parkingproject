import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebaseconfig';

export default function CreateAccount() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleCreateAccount = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                Alert.alert('Success', 'Account created successfully!');
            })
            .catch(error => {
                Alert.alert('Error', error.message);
            });
    };

    return (
        <View style={{ padding: 20 }}>
            <Text>Email:</Text>
            <TextInput 
                placeholder="Enter email"
                value={email}
                onChangeText={setEmail}
                style={{ borderWidth: 1, padding: 8, marginBottom: 10 }}
            />
            <Text>Password:</Text>
            <TextInput 
                placeholder="Enter password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={{ borderWidth: 1, padding: 8, marginBottom: 10 }}
            />
            <Button title="Create Account" onPress={handleCreateAccount} />
        </View>
    );
}
