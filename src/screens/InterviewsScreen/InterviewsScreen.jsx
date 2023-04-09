import { Link } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import TextInputWithLabel from "../../components/atoms/LabeledTextInput";
import DateInputWithLabel from "../../components/molecules/DateInputWithLabel";
import ToggleSwitchWithText from "../../components/atoms/ToggleSwitchWithText";
import TextInputArea from "../../components/atoms/TextInputArea";
import { base, input } from "../../styles/base";
import Dropdown from '../../components/atoms/Dropdown';
import Button from "../../components/atoms/Button";

const data = {
	member: "Brian Madroñero",
	commissioned: "Vairon Forero",
	type: "Renovación de recomendación",
	date: "2023-02-13T08:08:00:60.000Z",
	status: "pending",
	comments: "",
}


const handleSubmit = (event) => {
    console.log('A name was submitted: ' + event);
	console.log({event});
    //event.preventDefault();
}

function InterviewsScreen(props) {
	return (
		<SafeAreaView style={styles.layout}>
			{/* <Link to={{ screen: 'Home', params: { id: 'jane' } }}>¿No tienes cuenta aún?</Link> */}
			<TextInputWithLabel
				placeholder="User Name"
				keyboardType="default"
				label="Miembro"
			/>
			<Dropdown items={[
				{label: 'Brian', value: 'brian'},
				{label: 'Roberto', value: 'roberto'}
			]} placeholder="Encargado"/>
			<Dropdown items={[
				{label: 'Renovación de recomendación', value: 'recomendation'},
				{label: 'Llamamiento', value: 'calling'}
			]} placeholder="Tipo"/>
			<DateInputWithLabel label="Fecha" placeholder="26 Mar 2023" />
			<ToggleSwitchWithText activeText="Realizada" inactiveText="Pendiente"/>
			<TextInputArea />
			<Button onPress={handleSubmit}/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	layout: {
		backgroundColor: '#FFF',
		flex: 1,
		rowGap: 20,
		padding: 12,
	},
});

export default InterviewsScreen