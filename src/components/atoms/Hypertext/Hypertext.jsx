import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const Hypertext = (props) => {
  const [number, onChangeNumber] = React.useState(null);

  return <TextInput
        onChangeText={onChangeNumber}
        value={props.placeholder}
        placeholder={props.placeholder}
        keyboardType="numeric"
      />
};

export default Hypertext;
