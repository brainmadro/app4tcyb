import React, { useState } from 'react'
import {SafeAreaView, StyleSheet, Text, TextInput} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {Picker} from '@react-native-picker/picker';

function Dropdown(props) {
	const [selectedLanguage, setSelectedLanguage] = useState();

	return <SafeAreaView style={styles.dropdown}>
		<Picker
			selectedValue={selectedLanguage}
			onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}>
			<Picker.Item label={props.placeholder} value={0} style={styles.placeholder} />
			{props.items.map(item => <Picker.Item label={item.label} value={item.value} />)}
		</Picker>
	</SafeAreaView>

}

const styles = StyleSheet.create({
	dropdown: {
		height: 55,
		backgroundColor: '#0000',
		borderWidth: 1,
		borderRadius: 8,
		borderColor: '#868E96',
		fontSize: 15,
	},
	placeholder: {
		color: '#868E96'
	}
});

export default Dropdown