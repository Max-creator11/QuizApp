import React, {useState, useEffect} from 'react'
import {StyleSheet, View, Text, SafeAreaView} from 'react-native'
import { FormInput, FormButton } from './components'
import { auth } from '../firebase'
const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const handleOnSubmit = async () => {
    if(email ==='' && password ===''){
      setError('')
       return
      } 
    try{
      setError('')
      await auth.signInWithEmailAndPassword(email, password)
      navigation.navigate('HomeScreen')
    } catch{
      setError('Failed to log in!')
    }
    setEmail('')
    setPassword('')
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user){
        navigation.navigate("HomeScreen")
      }
    })
    return unsubscribe
  },[])


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
        Sign In
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