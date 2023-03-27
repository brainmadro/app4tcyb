import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const PasswordInput = (props) => {
  const [number, onChangeNumber] = React.useState(null);

  return <TextInput
        onChangeText={onChangeNumber}
        value={number}
        placeholder={props.placeholder}
        keyboardType="default"
        secureTextEntry={props.secureTextEntry}
      />
};

export default PasswordInput;
