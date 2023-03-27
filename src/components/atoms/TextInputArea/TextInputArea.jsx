import React, { useState } from 'react'
import {StyleSheet, TextInput} from 'react-native';

function TextInputArea({placeholder, keyboardType, label}, props) {
	const [value, onChangeText] = useState('')
	return <TextInput
		editable
		multiline
		numberOfLines={4}
		maxLength={250}
		onChangeText={text => onChangeText(text)}
		placeholder="Comentarios ..."
		value={value}
		style={styles.input}
	/>
}

const styles = StyleSheet.create({
  label: {
	color: '#868E96',
	fontSize: 12
  },
  input: {
    height: 105,
    borderWidth: 1,
	borderRadius: 8,
	borderColor: '#868E96',
	fontSize: 15,
    paddingHorizontal: 10,
	paddingVertical: 6,
	textAlignVertical: 'top'
  },
});

export default TextInputArea;