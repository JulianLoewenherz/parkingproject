import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from '../styles/FlagScreenStyles';

//importing needed firebase modules 
import { storage, database } from '../config/firebaseconfig';

//imports
import {ref as storageRef, uploadBytes, getDownloadURL,} from 'firebase/storage';
import {ref as databaseRef, push,set } from 'firebase/database';

//changing variables
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


  //function for converting local URI to a blob
  const uriToBlob = async (uri) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = () => {
        resolve(xhr.response);
      };
      xhr.onerror = () => {
        reject(new Error('Error converting URI to Blob'));
      };
      xhr.responseType = 'blob';
      xhr.open('GET', uri, true);
      xhr.send(null);
    });
  };

  const submitImage = async () => {
    if (!image) {
      Alert.alert("No Image", "Please take a photo first.");
      return;
    }

    try {
      // Convert the local image URI to a blob
      const blob = await uriToBlob(image);

      // 2. Create a unique path for the image in Firebase Storage
      const filename = `images/${new Date().getTime()}`;
      const imageStorageRef = storageRef(storage, filename);

      // 3. Upload the blob to Firebase Storage
      const snapshot = await uploadBytes(imageStorageRef, blob);

      // Close the blob to release resources
      blob.close();

      // 4. Get the download URL of the uploaded image
      const downloadURL = await getDownloadURL(snapshot.ref);

      // 5. Save the download URL (and optionally additional metadata) to Firebase Realtime Database
      const incidentsRef = databaseRef(database, 'incidents');
      const newIncidentRef = push(incidentsRef);
      await set(newIncidentRef, {
        imageUrl: downloadURL,
        timestamp: Date.now(),
        // You can add other fields here (e.g., license plate number, location, etc.)
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
        <Button title="Submit Incident" onPress={submitImage} />
        <Button title="Cancel" onPress={() => { () => router.push("/index")}} />
      </View>
    </View>
  );
}
