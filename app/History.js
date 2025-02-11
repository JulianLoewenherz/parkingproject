import React, { useState, useEffect } from "react";
import { View, ScrollView, Alert } from "react-native";
import CardComponent from "../components/CardComponent";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, query, orderByChild, equalTo, onValue } from "firebase/database";

export default function ScrollingPage() {
    const [submissions, setSubmissions] = useState([]);
    
    useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser;

        const userID = user.uid;
        const db = getDatabase();
        const incidentsRef = ref(db, "incidents");
        const userIncidentsQuery = query(incidentsRef, orderByChild("userID"), equalTo(userID));

        // Real-time listener for changes in database
        const unsubscribe = onValue(userIncidentsQuery, (snapshot) => {
            if (snapshot.exists()) {
                const userSubmissions = Object.values(snapshot.val());
                setSubmissions(userSubmissions); 
            } else {
                setSubmissions([]);
            }
        });

        // Cleanup the listener when the component unmounts
        return () => unsubscribe();
    }, []); // Runs only once but listens for real-time updates

    return (
        <ScrollView>
            {submissions.map((submission, index) => (
                <CardComponent key={index} {...submission} />
            ))}
        </ScrollView>
    );
}
