import React, {useState} from 'react'
import {StyleSheet,View, Text, SafeAreaView} from 'react-native'
import {FormInput, FormButton } from './components'
import { auth } from '../firebase'

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [confirmationPassword, setConfirmationPassword] = useState('')



  const handleOnSubmit = () => {
    if(email !='' && password != '' && confirmationPassword !=''){
      if(password == confirmationPassword){
        auth.createUserWithEmailAndPassword(email, password).then(() => {
          setError('')
        }).catch(() => setError('failed to sign up!'))

      } else {
        setError('password do not match!')
      }
    } 
    
  }

  const ShowError = () => {
    return(
      <>
      {error && (
      <View style={styles.errorBox}>
        <Text style={styles.errorBoxText}>{error}</Text>
      </View>) }
      </>
    )
  }

  return (
    <SafeAreaView
    style={{
      backgroundColor:'white',
      flex:1,
      alignItems:'center',
      justifyContent:'flex-start',
      padding:20,
    }}>
      {/* Header */}
      <Text style={{
        fontSize:24,
        color:'black',
        fontWeight:'bold',
        marginVertical:32
        }}>
        Sign Up
      </Text>

      {/* Form */}
        
      <ShowError/>
      <FormInput 
      labelText='Email'
      placeholderText='enter your email'
      onChangeText = {value => setEmail(value)}
      value ={email}
      keyboardType = {'email-adress'}
      />

      <FormInput 
      labelText='Password'
      placeholderText='enter your password'
      onChangeText = {value => setPassword(value)}
      value ={password}
      secureTextEntry={true}
      />

      <FormInput 
      labelText='Confirm Password'
      placeholderText='confirm your password'
      onChangeText = {value => setConfirmationPassword(value)}
      value ={confirmationPassword}
      secureTextEntry={true}
      />

      {/* SubmitButton */}
      <FormButton labelText={'Submit'} handleOnPress={handleOnSubmit} style={{width:'100%'}}/>

      <View style={{flexDirection:'row', alignItems:'center', marginTop:20}}>
      
     
       
        <Text> Already a user?</Text>
        <Text style={{marginLeft:4, color:'blue'}} onPress={() => navigation.navigate('SignInScreen')}>Log in</Text>
      </View>
    </SafeAreaView>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  errorBox:{
  borderRadius: 5,
  padding:10,
  backgroundColor:'#a52a2a'
  },
  errorBoxText:{
  color:'white',
  fontWeight:'700'
  }
})