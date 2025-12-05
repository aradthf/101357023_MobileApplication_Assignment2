import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';




const InputField = ({ label, value, onChangeText, keyboardType = 'default', placeholder }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        placeholder={placeholder}
        autoCapitalize="characters"
      />
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderRadius: 6,
    padding: 8,
  },
});



export default InputField;
