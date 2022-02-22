import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { auth } from '../firebase'
const HomeScreen = ({navigation}) => {
  
const handleOnPress = () => {
  auth.signOut().then(navigation.navigate('SignInScreen')).catch(error => alert(error.message))
}

  return (
    <View style={styles.container}>
        <Text>{auth.currentUser?.email}</Text>
   
    <TouchableOpacity style={styles.button} onPress={handleOnPress}>
    <Text style={styles.buttonText}>Sign out</Text>
    </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
  },
  button:{
    backgroundColor:'#0782F9',
    width:'100%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText:{
    color:'white',
    fontWeight:'700'
  }
})