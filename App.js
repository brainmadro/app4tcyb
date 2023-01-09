import * as React from 'react';
import { View, Text } from 'react-native';
import { Link, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from "./src/screens/SignUpScreen";
import HomeScreen from './src/screens/HomeScreen'
import EditText from './src/components/atoms/EditText';
import PasswordInput from './src/components/atoms/PasswordInput';

function Form(props) {
	return (
		<View>{props.children}</View>
	)
}

function onChangeText() {
		console.log("Cambio")
}

function LogInScreen({navigation}) {
    return (
      <View>
        <Form>  
          <EditText 
            onChangeText={onChangeText}
            placeholder="Correo"
          />
          <PasswordInput
            onChangeText={onChangeText}
            placeholder="Contraseña"
            secureTextEntry={true}
          />
        </Form>
        <Link to={{ screen: 'Home', params: { id: 'jane' } }}>¿No tienes cuenta aún?</Link>
      </View>
    );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: 'Registrarse' }}/>
        <Stack.Screen name="LogIn" component={LogInScreen} options={{ title: 'Iniciar Sesión' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
