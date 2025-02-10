import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function Profile() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Your Profile</Text>

      {/* First Name */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>First Name:</Text>
        <TextInput
          placeholder="Enter your first name"
          value={firstName}
          onChangeText={setFirstName}
          style={styles.input}
        />
      </View>

      {/* Last Name */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Last Name:</Text>
        <TextInput
          placeholder="Enter your last name"
          value={lastName}
          onChangeText={setLastName}
          style={styles.input}
        />
      </View>

      {/* Address Line 1 */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Address Line 1:</Text>
        <TextInput
          placeholder="Enter your address"
          value={addressLine1}
          onChangeText={setAddressLine1}
          style={styles.input}
        />
      </View>

      {/* Address Line 2 */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Address Line 2 (Optional):</Text>
        <TextInput
          placeholder="Enter additional address info"
          value={addressLine2}
          onChangeText={setAddressLine2}
          style={styles.input}
        />
      </View>

      {/* Postal Code */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Postal Code:</Text>
        <TextInput
          placeholder="Enter your postal code"
          value={postalCode}
          onChangeText={setPostalCode}
          style={styles.input}
        />
      </View>

      {/* City */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>City:</Text>
        <TextInput
          placeholder="Enter your city"
          value={city}
          onChangeText={setCity}
          style={styles.input}
        />
      </View>

      {/* Save Button (Not Yet Implimented - Julian this will link up to your database) */}
      <View style={styles.buttonContainer}>
        <Button
          title="Save Profile"
          onPress={() => alert('Profile saved (functionality not yet implemented).')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    marginTop: 20,
    borderRadius: 5,
  },
});