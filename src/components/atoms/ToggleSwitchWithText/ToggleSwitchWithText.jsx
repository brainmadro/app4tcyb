import React, { useState } from "react";
import { Text, StyleSheet, Pressable, SafeAreaView } from "react-native";

function ToggleSwitchWithText(props) {
	const [isActive, setIsActive] = useState(false)

	return <Pressable
		onPress={() => setIsActive(previousState => !previousState)}
		style={({pressed}) => [
			styles.switch,
		]}>
		{() => (
			<SafeAreaView style={styles.textContainer}>
				<Text style={styles.text}>{isActive ? props.activeText : props.inactiveText}</Text>
			</SafeAreaView>
		)}
	</Pressable>
}



const styles = StyleSheet.create({
	textContainer: {
		alignItems: 'center',
		backgroundColor: '#FFF',
		borderRadius: 100/2,
		height: '100%',
		justifyContent: 'center',
		width: '50%'
	},
	text: {
		color: '#5DB075',
		fontWeight: 'bold',
	},
	switch: {
		height: 55,
		backgroundColor: '#F6F6F6',
		borderWidth: 1,
		borderRadius: 100/2,
		borderColor: '#868E96',
		fontSize: 15,
	},
});

export default ToggleSwitchWithText