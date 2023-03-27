import React, { useState } from 'react'
import {SafeAreaView, StyleSheet, Text, TextInput} from 'react-native';

function TextInputWithLabel({placeholder, keyboardType, label}, props) {
	const [value, onChangeText] = useState('')
	return (
		<SafeAreaView style={styles.input}>
			<Text style={styles.label}>{label}</Text>
			<TextInput
				editable={props.editable}
				onChangeText={onChangeText}
				value={value}
				placeholder={placeholder}
				keyboardType={keyboardType}
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
  label: {
	color: '#868E96',
	fontSize: 12
  },
  input: {
    height: 55,
    borderWidth: 1,
	borderRadius: 8,
	borderColor: '#868E96',
	fontSize: 15,
    paddingHorizontal: 10,
	paddingVertical: 6
  },
});

export default TextInputWithLabel;