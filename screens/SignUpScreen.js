import React, {useState} from 'react'
import {View, Text, SafeAreaView} from 'react-native'
import {FormInput, FormButton } from './components'


const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmationPassword, setConfirmationPassword] = useState('')

  const handleOnSubmit = () => {
    if(email !='' && password != '' && confirmationPassword !=''){
      if(password == confirmationPassword){
        //SignUp
      } else {
        alert('password did not match')
      }
    } 
    setEmail('')
    setPassword('')
    setConfirmationPassword('')
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
        <Text> Dont have an account?</Text>
        <Text style={{marginLeft:4, color:'blue'}} onPress={() => navigation.navigate('SignInScreen')}>Create account</Text>
      </View>
    </SafeAreaView>
  )
}

export default SignUpScreen