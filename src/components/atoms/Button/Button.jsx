import React from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";

function Button(props) {
	const { onPress, title = 'Save' } = props;
	return (
	  <TouchableHighlight style={styles.button} onPress={onPress}>
		<Text style={styles.text}>{title}</Text>
	  </TouchableHighlight>
	);
  }
  
const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 100/2,
		elevation: 3,
		backgroundColor: '#76B1B5',
	},
	text: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: 'bold',
		letterSpacing: 0.25,
		color: 'white',
	},
});

export default Button;
