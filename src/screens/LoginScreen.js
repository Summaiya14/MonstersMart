import React from 'react';
import { View, Text, StyleSheet, Image, Button, TextInput } from 'react-native';
 
const LoginScreen = () => {
return <View style={styles.backgroundStyle}>
       <Image style={styles.imageStyle}source={require('../../assets/applogo.png')}/>
	   <TextInput
	   style={styles.inputStyle}
	   placeholder='Enter Email'
       autoCapitalize="none"
       autoCorrect={false}
	   />
	   <TextInput
	   style={styles.inputStyle}
	   placeholder='Enter Password'
       autoCapitalize="none"
       autoCorrect={false}
	   />
	  
</View>
};

const styles = StyleSheet.create({
backgroundStyle: {
	backgroundColor: 'black',
	flex: 1
},
imageStyle: {
    height: 240,
	width: 240,
	alignSelf: 'center'
},
inputStyle: {
	//flex: 1,
	fontSize: 18,
	margin: 15,
	//borderColor: 'white',
	//borderWidth: 1,
	//color: 'white',
	backgroundColor: '#F0EEEE',
	height: 35,
	borderRadius: 12
}

});

export default LoginScreen;





