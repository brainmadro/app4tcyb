import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const EditText = (props) => {
  const [number, onChangeNumber] = React.useState(null);

  return <TextInput
        onChangeText={onChangeNumber}
        value={number}
        placeholder={props.placeholder}
        keyboardType="numeric"
      />
};

export default EditText;
