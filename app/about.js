import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function About() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>About Parking Enforcement App</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>
          This app was created to speed up the time it takes to report parking violations.
        </Text>
        <Text style={styles.sectionHeader}>Key Features:</Text>
        <Text style={styles.text}>🚗 Report residential parking violations with photos.</Text>
        <Text style={styles.text}>📜 Track the status of submitted reports.</Text>
        <Text style={styles.text}>🔒 Secure and seamless login experience.</Text>
        <Text style={styles.text}>📍 Built for ease-of-use on iOS and Android.</Text>
        
        <Text style={styles.sectionHeader}>Our Mission:</Text>
        <Text style={styles.text}>
          We believe in empowering communities with tools to address parking issues effectively. By making it simple to document and report violations, we contribute to safer and more organized streets.
        </Text>

        <Text style={styles.sectionHeader}>Contact Us:</Text>
        <Text style={styles.text}>📧 Email: jakevalinho@gmail.com</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f6fa',
  },
  header: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#2e86de',
    borderRadius: 10,
  },
  headerText: {
    fontSize: 22,
    color: '#fff',
    textAlign: 'center',
  },
  content: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    marginVertical: 8,
    color: '#2d3436',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#34495e',
  },
});
