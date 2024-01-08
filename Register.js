import React, { useState } from 'react';

import { View, TextInput,Text, Button, StyleSheet, TouchableOpacity, Alert,} from 'react-native';

const SignupScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('user');
  const Register = async () => {
    try {
      console.log("Registering");
      const Response = await fetch("http://192.168.0.103:3000/api/v1/user/signup", {
        method: "POST",
        headers:"application/json",

        body: JSON.stringify({
          name: name,
          email: email,
          role: role,
          password: password,
          passwordConfirm: confirmPassword,
          
        }),
      });

      if (!Response.ok) {
       
        console.log("failed");
      }

      const data = await Response.json();
      
      console.log(data);
      const token = data.token;

      await AsyncStorage.setItem("jsontoken", token);

      // Example: Navigate to a different screen after successful login
     console.log("LoggedIn");
    } catch (error) {
      console.error("Error during Signup:", error.message);
      // Handle error, show alert, etc.
    
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        onChangeText={(text) => setConfirmPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="role"
        secureTextEntry
        onChangeText={(text) => setRole(text)}
      />
        <TouchableOpacity>
          <Button title="Sign Up" onPress={()=>Register()} />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    marginBottom: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
});

export default SignupScreen;
