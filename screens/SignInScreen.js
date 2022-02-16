import React, {useState} from 'react'
import {View, Text, SafeAreaView} from 'react-native'
import { SignUpScreen } from '.'
import { FormInput, FormButton } from './components'
const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleOnSubmit = () => {
    console.log(`email:${email}; password:${password}`)
    setEmail('')
    setPassword('')
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
        Sign In
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

      {/* SubmitButton */}
      <FormButton labelText={'Submit'} handleOnPress={handleOnSubmit} style={{width:'100%'}}/>

      <View style={{flexDirection:'row', alignItems:'center', marginTop:20}}>
        <Text> Dont have an account?</Text>
        <Text style={{marginLeft:4, color:'blue'}} onPress={() => navigation.navigate('SignUpScreen')}>Create account</Text>
      </View>
    </SafeAreaView>
  )
}

export default SignInScreen