import React from "react";
import { Text, View } from "react-native";
import Calendar from "../../components/organisms/Calendar";

function HomeScreen({navigation}) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Calendar></Calendar>
		</View>
	);
};

export default HomeScreen;