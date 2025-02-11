import React from 'react';
import { router } from 'expo-router';
import { Image } from "react-native";
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const CardComponent = ({
    imageUrl,
    title, 
    date, 
    description,
    license,
    time,
    category, 
    status,
}) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>

            <Text style={styles.dateTime}>
                <Text style={styles.bold}>Date:</Text> {date} | <Text style={styles.bold}>Time:</Text> {time}
            </Text>
            <Text style={styles.license}>
                <Text style={styles.bold}>License Plate:</Text> {license}
            </Text>
            <Text style={styles.category}>
                <Text style={styles.bold}>Category:</Text> {category}
            </Text>
            <Text style={styles.description}>
                <Text style={styles.bold}>Description:</Text> {description}
            </Text>

            <Text style={[styles.status, { backgroundColor: "grey" }]}>
                {status}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        padding: 15,
        margin: 10,
        width: 350,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: "100%",
        height: 150,
        resizeMode: "cover",
        borderRadius: 8,
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8,
    },
    dateTime: {
        fontSize: 14,
        color: "#555",
    },
    license: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#222",
    },
    category: {
        fontSize: 14,
        color: "#444",
        fontStyle: "italic",
    },
    description: {
        fontSize: 14,
        marginTop: 8,
    },
    status: {
        marginTop: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        textAlign: "center",
        fontWeight: "bold",
        color: "#fff",
        overflow: "hidden",
    },
    bold: {
        fontWeight: "bold",
    },
});

export default CardComponent;