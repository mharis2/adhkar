import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Icon } from 'react-native-elements';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, styles.morningButton]}
        onPress={() => navigation.navigate('Morning Adhkar')}
      >
        <Icon name="sun" type="feather" color="white" size={24} />
        <Text style={styles.buttonText}>Morning Adhkar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.eveningButton]}
        onPress={() => navigation.navigate('Evening Adhkar')}
      >
        <Icon name="moon" type="feather" color="white" size={24} />
        <Text style={styles.buttonText}>Evening Adhkar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDF5E6', // Beige background
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    width: '80%',
    elevation: 2,
  },
  morningButton: {
    backgroundColor: '#FFA726', // Light Orange
  },
  eveningButton: {
    backgroundColor: '#7986CB', // Light Indigo
  },
  buttonText: {
    color: '#FFFFFF', // White
    fontSize: 18,
    marginLeft: 10,
  },
});
