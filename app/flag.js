import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from '../styles/FlagScreenStyles';

export default function FlagScreen() {
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
      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: false,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error('Error taking photo:', error);
    }
  };

  const submitImage = async() => {



  }

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

        {/* Image Placeholder using TouchableOpacity */}
        <View style={styles.imagePlaceholder}>
          <TouchableOpacity onPress={takePhoto} style={styles.touchable}>
            {image ? (
              <Image source={{ uri: image }} style={styles.image} />
            ) : (
              <Text style={styles.buttonText}>Take Photo</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <Button title="Submit Incident" onPress={() => { submitImage }} />
        <Button title="Cancel" onPress={() => { () => router.push("/index")}} />
      </View>
    </View>
  );
}
