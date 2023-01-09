import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Button, Platform } from 'react-native';

function Navigation(props) {
	return <Button title={props.type} />
}

function getMonthViewDays(month) {
	const days = []
	const firstRow = [27, 28, 29, 30, 1, 2, 3]
	const secondRow = [4, 5, 6, 7, 8, 9, 10]
	const thirdRow = [11, 12, 13, 14, 15, 16, 17]
	const fourthRow = [18, 19, 20, 21, 22, 23, 24]
	const fifthRow = [25, 26, 27, 28, 29, 30, 31]

	const currentDay = new Date(new Date().setDate(1))
	firstRow.map(day => {
		
	})
	console.log("D: ", currentDay.getDay());

	days.push(firstRow)
	days.push(secondRow)
	days.push(thirdRow)
	days.push(fourthRow)
	days.push(fifthRow)
	return days
}

function getCurrentMonth(lang, month) {
	const translations = {
		spa: {
			'0': 'Enero',
			'1': 'Febrero',
			'11': 'Diciembre'
		}
	}
	return translations[lang][month]
	
}

function CalendarPicker(props) {
	const numberDays = getMonthViewDays()
	
	return (
		<View style={styles.container}>
			<View style={styles.calendarHeader}>
				<Navigation type='back'/>
				<Text>{ getCurrentMonth('spa', new Date().getMonth()) }</Text>
				<Navigation type='next'/>	
			</View>
			<View>
				<View style={styles.calendarDaysHeader}>
					<Text>Dom</Text>
					<Text>Lun</Text>
					<Text>Mar</Text>
					<Text>Mie</Text>
					<Text>Jue</Text>
					<Text>Vie</Text>
					<Text>Sab</Text>
				</View>
				<View>
					{
						numberDays.map(x => {
							console.log(x);
							return <Text>{x}</Text>
						})
					}
				</View>
			</View>
		</View>
	) 
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 50
	},
	calendarHeader: {
		flexDirection: 'row',
		fontWeight: 'bold',
		fontSize: 30
	},
	calendarDaysHeader: {
		flexDirection: 'row'
	},
});

export { CalendarPicker }