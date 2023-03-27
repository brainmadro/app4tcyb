import React, { useState } from 'react'
import {Modal, View, Text, SafeAreaView, StyleSheet, Pressable} from 'react-native';
import ReactNativeModernDatepicker from 'react-native-modern-datepicker';

function DateInputWithLabel({onPress, label, placeholder}, props) {	
	const [modalVisible, setModalVisible] = useState(false);
	const [selectedDate, setSelectedDate] = useState(null);

	return (
		<SafeAreaView>
			<Pressable style={styles.input} onPress={() => setModalVisible(true)}>
				<Text style={styles.label}>{label}</Text>
				<Text style={styles.date}>{selectedDate ?? placeholder}</Text>
			</Pressable>
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					Alert.alert('Modal has been closed.');
					setModalVisible(!modalVisible);
				}}>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<ReactNativeModernDatepicker style={styles.calendar} onSelectedChange={date => { setSelectedDate(date); setModalVisible(false)}} />
						<Pressable
							style={[styles.button, styles.buttonClose]}
							onPress={() => setModalVisible(!modalVisible)}>
							<Text style={styles.textStyle}>Cancelar</Text>
						</Pressable>
					</View>
				</View>
			</Modal>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
  label: {
	color: '#868E96',
	fontSize: 12
  },
  input: {
    height: 55,
	backgroundColor: '#FFF',
    borderWidth: 1,
	borderRadius: 8,
	borderColor: '#868E96',
	fontSize: 15,
    paddingHorizontal: 10,
	paddingVertical: 6
  },
  date: {
	color: '#868E96'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
	width: '90%',
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default DateInputWithLabel;