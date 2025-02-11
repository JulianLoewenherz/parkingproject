import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from '../styles/FlagScreenStyles';
import { storage, database } from '../config/firebaseconfig';
import { ref as storageRef, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { ref as databaseRef, push, set } from 'firebase/database';
import { getAuth } from "firebase/auth"; //for userID submission


export default function FlagScreen() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Needed', 'Sorry, we need camera permissions to make this work!');
      }
    })();
  }, []);

  const takePhoto = async () => {
    try {
      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: false,
        aspect: [4, 3],
        quality: 0.6, 
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error('Error taking photo:', error);
    }
  };

  const submitImage = async () => {
    if (!image) {
      Alert.alert("No Image", "Please take a photo first.");
      return;
    }

    try {

      //getting currenlty logged-in user
      const auth = getAuth();
      const user = auth.currentUser;
      const userID = user.uid

      const response = await fetch(image);
      const blob = await response.blob();

      const filename = `images/${Date.now()}.jpg`;
      const imageStorageRef = storageRef(storage, filename);

      const uploadTask = uploadBytesResumable(imageStorageRef, blob);

      // Wait for the upload to finish and get the download URL
      await uploadTask;
      const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

      // Save the download URL to Firebase Realtime Database
      const incidentsRef = databaseRef(database, 'incidents');
      const newIncidentRef = push(incidentsRef);
      await set(newIncidentRef, {
        userID: userID,
        imageUrl: downloadURL,
        timestamp: Date.now(),

      });

      Alert.alert("Success", "Image submitted successfully");
      // Reset the image state after submission
      setImage(null);

    } catch (error) {
      console.error('Error uploading image:', error);
      Alert.alert("Upload Error", "There was an error uploading your image.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Flag an Incident</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.instructions}>
          Please capture a photo of the offending vehicle and enter the license plate number.
        </Text>

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

      <View style={styles.footer}>
        <Button title="Submit Incident" onPress={submitImage} />
        <Button title="Cancel" onPress={() => { () => router.push("/index")}} />
      </View>
    </View>
  );
}
