import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from '../styles/FlagScreenStyles';

export default function FlagScreen() {
  // useState hook: holds the image URI; initially, there's no image (null)
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'Permission Needed',
          'Sorry, we need camera permissions to make this work!'
        );
      }
    })();
  }, []); 

  const takePhoto = async () => {
    try {
      // Launch the device camera using expo-image-picker
      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: false,     //user can't edit photo
        aspect: [4, 3],           
        quality: 1,             
      });

      console.log(result); 

      
      if (!result.cancelled) {
        // Update state with the image URI; this causes the component to re-render
        setImage(result.uri);
      }
    } catch (error) {
      console.error('Error taking photo:', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Flag an Incident</Text>
      </View>

      {/* Content Section */}
      <View style={styles.content}>
        <Text style={styles.instructions}>
          Please capture a photo of the offending vehicle and enter the license plate number.
        </Text>

        {/* Image Placeholder: Shows the photo if available; otherwise shows the button */}
        <View style={styles.imagePlaceholder}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} />
          ) : (
            <Button title="Take Photo" onPress={takePhoto} />
          )}
        </View>

        {/* You might later add a TextInput for the license plate number here */}
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <Button title="Submit Incident" onPress={() => { /* Handle submit */ }} />
        <Button title="Cancel" onPress={() => { /* Handle cancel/navigation */ }} />
      </View>
    </View>
  );
}