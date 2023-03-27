import React from "react";
import { Text } from "react-native";

export default function CalendarDay({ value, style}) {
	return (
		<View style={style}>
			<Text>{ value }</Text>
		</View>
	)
}