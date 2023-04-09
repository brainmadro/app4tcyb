import { Link } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
//import EditText from "../../components/atoms/EditText";
import PasswordInput from "../../components/atoms/PasswordInput";


function onChangeText() {
	console.log();
}

function Form(props) {
	return (
		<View>{props.children}</View>
	)
}

function SignUpScreen({navigation}) {
	return (
		<View>
			<Form>
				{/* <EditText 
					onChangeText={onChangeText}
					placeholder="Nombre"
				/>

				<EditText 
					onChangeText={onChangeText}
					placeholder="Correo"
				/> */}
				<PasswordInput 
					onChangeText={onChangeText}
					placeholder="Contraseña"
					secureTextEntry={true}
				/>
			</Form>
			<Link to={{ screen: 'Home', params: { id: 'jane' } }}>
				¿Olvidaste tu contraseña?
			</Link>		
		</View>
	);
};

export default SignUpScreen;