import React, { useState } from "react";

import {
  View,
  TextInput,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// const SignupScreen = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordConfirm, setConfirmPassword] = useState("");
//   const [role, setRole] = useState("user");
//   const Register = async () => {
//     try {
//       console.log("Registering");

//       const Response = await fetch(
//         "http://192.168.0.103:3000/api/v1/user/signup",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },

//           body: JSON.stringify({
//             name: name,
//             email: email,
//             // role: role,
//             password: password,
//             passwordConfirm: passwordConfirm,
//           }),
//         }
//       );
//       console.log(Response);

//       if (!Response.status === 200) {
//         console.log("failed");
//       }

//       const data = await Response.json();

//       console.log(data);
//       const token = data.token;

//       await AsyncStorage.setItem("jsontoken", token);

//       // Example: Navigate to a different screen after successful login
//       console.log("LoggedIn");
//     } catch (error) {
//       console.error("Error during Signup:", error.message);
//       // Handle error, show alert, etc.
//     }
//   };

function SignupScreen() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  console.log(formData);

  const handleSubmit = async (e) => {
    try {
      const response = await fetch(
        "http://192.168.0.103:3000/api/v1/user/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      console.log(formData);

      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        const token = data.token;
        await AsyncStorage.setItem("jsontoken", token);
      } else {
        const errorData = await response.json();
        console.error(errorData);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="name"
        value={formData.name}
        onChangeText={(text) => handleChange("name", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="email"
        value={formData.email}
        onChangeText={(text) => handleChange("email", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="password"
        value={formData.password}
        secureTextEntry
        onChangeText={(text) => handleChange("password", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="passwordConfirm"
        value={formData.passwordConfirm}
        secureTextEntry
        onChangeText={(text) => handleChange("passwordConfirm", text)}
      />
      {/* <TextInput
        style={styles.input}
        placeholder="role"
        secureTextEntry
        onChangeText={(text) => setRole(text)}
      /> */}
      <TouchableOpacity>
        <Button title="Sign Up" onPress={() => handleSubmit()} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  input: {
    marginBottom: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
  },
});

export default SignupScreen;
