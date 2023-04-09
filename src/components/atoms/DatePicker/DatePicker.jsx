import React from "react";
import DatePickerLib from "react-native-datepicker";
import { SafeAreaView, StyleSheet } from "react-native";

function DatePicker(props) {
	const [selectedDate, setSelectedDate] = useState('');
	return (
		<SafeAreaView style={styles.container}>
			<DatePicker
				onSelectedChange={props.onSelectedChange}
			/>
		</SafeAreaView>
		
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})

export default DatePicker

/* <DatePicker
	onSelectedChange={date => setSelectedDate(date)}
/> */