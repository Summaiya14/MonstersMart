import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const HomeScreen = () => {
  return <View style={styles.backgroundStyle}>
  <Image style={styles.imageStyle}source={require('../../assets/applogo.png')}/>
  <Text style={styles.textStyleOne}>The Easy Shopping Solution</Text>
  <Text style={styles.textStyleTwo}>The shop is now in your hand!</Text>
  <Image style={styles.iconStyle} source={require('../../assets/shoppingcart.jpg')}/>
  <Button color='white' title='User Login Here'/>
  <Button title='Create Account'/>  

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
textStyleOne: {
    color: '#873b51',
	fontSize: 25,
	fontWeight: 'bold',
	alignSelf: 'center'
},
textStyleTwo: {
    color: '#873b51',
	alignSelf: 'center',
	fontSize: 20,
	fontWeight: 'bold'
},
iconStyle: {
	height: 150,
	width: 150,
	alignSelf: 'center'
}

});

export default HomeScreen;
