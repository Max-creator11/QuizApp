import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import { auth } from '../firebase'
import { FormButton } from './components'
const HomeScreen = ({navigation}) => {
  
const handleLogOut = () => {
  auth.signOut().then(navigation.navigate('SignInScreen')).catch(error => alert(error.message))
}

  return (
    <>
    <View style={styles.container}>
        <Text >{auth.currentUser?.email}</Text>
   
    <FormButton
      labelText='Sign Out'
      handleOnPress={handleLogOut}
      
      />
    </View>
      
    <View>
    <FormButton
      labelText='Create Quiz'
      handleOnPress={() => {
        navigation.navigate('CreateQuizScreen')
      }}
    /> 
    </View>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
    flexDirection:'row',
    border:'2px solid red'
   
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