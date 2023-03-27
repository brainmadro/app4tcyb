import React from "react";
import moment from 'moment/min/moment-with-locales'
import { Link } from "@react-navigation/native";
import Calendar from "../../components/organisms/Calendar";
import { getLocales, getCalendars } from 'expo-localization';
import { getInterviewAll } from "../../services/interviewService"
import { FlatList, Text, View, StyleSheet, ScrollView, Image } from "react-native";

const InterviewItem = ({title, date}, props) => {
	date = moment(date).locale('es').format('DD MMMM YYYY')
	return ( 
		<View style={styles.item}>
			<Image
				style={styles.tinyLogo}
				source={require('../../assets/favicon.png')}
			/>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.date}>{date.replace(/(\b[a-z])/, match => match.toUpperCase())}</Text>
		</View>
	)
}

const Item = ({title}) => ( 
	<View style={styles.item}>
		<Image
			style={styles.tinyLogo}
			source={require('../../assets/favicon.png')}
		/>
		<Text style={styles.title}>{title}</Text>
	</View>
)

/* {
	member: "Brian Madroñero",
	commissioned: "Vairon Forero",
	type: "Renovación de recomendación",
	date: "2023-02-13T08:08:00:60.000Z",
	status: "pending",
	comments: "",
} */

function HomeScreen({navigation}) {
	return (
		<ScrollView 
			horizontal={false}>
			{/* <Calendar style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}/> */}
			<Link to={{ screen: 'Interviews', params: { id: 'jane' } }}><Text style={styles.flatListTitle}>Entrevistas</Text></Link>
			<FlatList
				data={getInterviewAll()}
				renderItem={({item}) => <InterviewItem title={item.member} date={item.date}/>}
				keyExtractor={item => item.id}
				horizontal={true}/>
		</ScrollView>
	);
};


const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
  },
  date: {
    fontSize: 18,
	fontWeight: '600',
  },
  flatListTitle: {
	fontSize: 25
  }
});

export default HomeScreen;