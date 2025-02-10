// app/index.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Placeholder Image */}
      <Image
        source={{ uri: 'https://via.placeholder.com/300x150' }} // Replace with actual image later
        style={styles.image}
      />

      {/* App Title */}
      <Text style={styles.title}>Parking Enforcement App</Text>

      {/* Login Button */}
      <TouchableOpacity
        style={[styles.button, styles.primaryButton]}
        onPress={() => router.push('/login')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Create Account Button */}
      <TouchableOpacity
        style={[styles.button, styles.primaryButton]}
        onPress={() => router.push('/createAccount')}
      >
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      {/* About Us Button */}
      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={() => router.push('/about')}
      >
        <Text style={[styles.buttonText, styles.secondaryButtonText]}>About Us</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2d3436',
    marginBottom: 20,
  },
  button: {
    width: '80%',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#2e86de',
  },
  secondaryButton: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  secondaryButtonText: {
    color: '#333',
  },
});
