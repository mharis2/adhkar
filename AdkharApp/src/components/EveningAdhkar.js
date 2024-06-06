import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

export default function EveningAdhkar() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.duaContainer}>
        <Text style={styles.arabic}>أَمْسَيْنَا وَأَمْسَى المُلْكُ لِلَّهِ</Text>
        <Text style={styles.translation}>We have entered a new evening and all dominion belongs to Allah</Text>
        <Text style={styles.reference}>Reference: Sahih Muslim</Text>
      </View>
      {/* Add more duas here */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FDF5E6', // Beige background
    padding: 20,
  },
  duaContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#FFFFFF', // White
    borderRadius: 10,
    elevation: 1,
  },
  arabic: {
    fontSize: 20,
    textAlign: 'right',
    color: '#333333', // Dark Grey
    marginBottom: 10,
  },
  translation: {
    fontSize: 16,
    color: '#333333', // Dark Grey
    marginBottom: 10,
  },
  reference: {
    fontSize: 14,
    color: '#7986CB', // Light Indigo
  },
});
