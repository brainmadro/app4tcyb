import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, Platform, FlatList, LogBox, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

function Navigation(props) {
	return <Button title={props.type} />
}

function calculateCalendarDay(day, month, year) {
	const firstDay = new Date(year, month, 1).getDay() + 1	
	const tempDay = day
	
	day = {
		id: '123456',
		day: new Date(year, month, (day - firstDay) + 1).getDate(),
		date: new Date(year, month, (day - firstDay) + 1).getTime()
	}
	
	if (tempDay < firstDay) {
		const tempDate = new Date(year, month, 1)
		tempDate.setDate(tempDate.getDate() - (firstDay - tempDay))
		day = {
			id: '123456',
			day: tempDate.getDate(),
			date: tempDate.getTime()
		}
	}
	
	return day
}

function getMonthViewDays(month, year) {
	const days = []
	
	let firstRow = [1, 2, 3, 4, 5, 6, 7]
	let secondRow = [8, 9, 10, 11, 12, 13, 14]
	let thirdRow = [15, 16, 17, 18, 19, 20, 21]
	let fourthRow = [22, 23, 24, 25, 26, 27, 28]
	let fifthRow = [29, 30, 31, 32, 33, 34, 35]

	firstRow = firstRow.map((day) => calculateCalendarDay(day, month, year))
	secondRow = secondRow.map((day) => calculateCalendarDay(day, month, year))
	thirdRow = thirdRow.map((day) => calculateCalendarDay(day, month, year))
	fourthRow = fourthRow.map((day) => calculateCalendarDay(day, month, year))
	fifthRow = fifthRow.map((day) => calculateCalendarDay(day, month, year))

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
			'2': 'Marzo',
			'3': 'Abril',
			'4': 'Mayo',
			'5': 'Junio',
			'6': 'Julio',
			'7': 'Agosto',
			'8': 'Septiembre',
			'9': 'Octubre',
			'10': 'Noviembre',
			'11': 'Diciembre'
		}
	}
	return translations[lang][month]
	
}

function CalendarPicker(props) {
	const [activeDate, setActiveDate] = useState(new Date());

	const year = activeDate.getFullYear();
	const month = activeDate.getMonth();
	const numberDays = getMonthViewDays(month, year)

	const MONTH = 'month'

	const navigateBack = (type) => {
		if (type == MONTH) {
			setActiveDate(new Date(activeDate.setMonth(activeDate.getMonth() - 1)))
		}
	}

	const navigateForward = (type) => {
		if (type == MONTH) {
			setActiveDate(new Date(activeDate.setMonth(activeDate.getMonth() + 1)))
		}
	}  
	
	const Item = ({data: {date, day, id}}) => (
		<View style={styles.item}>
			<Text  onPress={() => setActiveDate(new Date(date))} style={(date == activeDate.getTime()) ? styles.calendarDaysActive : styles.calendarDays}>{`${ day }`}</Text>
		</View>
	);

	function IconButton(props) {
		return <Pressable onPress={props.onPress} ><FontAwesomeIcon icon={props.icon} /></Pressable>
	}
	
	return (
		<View style={styles.container}>
			<View style={styles.calendarHeader}>
				
				<IconButton icon='fa-solid fa-chevron-left' onPress={() => { navigateBack(MONTH) }}/>
				<Text style={styles.calendarHeaderTitle}>{ getCurrentMonth('spa', month) }</Text>
				<Text style={styles.calendarHeaderTitle}>{ year }</Text>
				<IconButton icon='fa-solid fa-chevron-right' onPress={() => { navigateForward(MONTH) }}/>
			</View>
			<View>
				<View style={styles.calendarDaysContainer}>
					<Text style={styles.calendarDaysHeader}>Dom</Text>
					<Text style={styles.calendarDaysHeader}>Lun</Text>
					<Text style={styles.calendarDaysHeader}>Mar</Text>
					<Text style={styles.calendarDaysHeader}>Mie</Text>
					<Text style={styles.calendarDaysHeader}>Jue</Text>
					<Text style={styles.calendarDaysHeader}>Vie</Text>
					<Text style={styles.calendarDaysHeader}>Sab</Text>
				</View>
				<FlatList
					data={numberDays.flat()}
					renderItem={({item}) => <Item data={item} />}
					keyExtractor={item => `${item}_day_${Math.random()}`}
					horizontal={false}
					numColumns={7}>
				</FlatList>
			</View>
		</View>
	) 
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: '10%',
		maxWidth: '90%'
	},
	calendarHeaderTitle: {
		fontWeight: 'bold',
		fontSize: 20,
		margin: 4
	},
	calendarHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		fontWeight: 'bold',
		fontSize: 30,
		textAlign: 'center'
	},
	calendarDaysContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	calendarDaysHeader: {
		flex: 1,
		textAlign: 'center'
	},
	calendarDays: {
		flex: 1,
		margin: 2,
		textAlign: 'center'
	},
	calendarDaysActive: {
		backgroundColor: '#e3e',
		flex: 1,
		margin: 2,
		textAlign: 'center'
	},
	item: {
		padding: '2%',
		width: '14.3%'
	}
});

export { CalendarPicker }