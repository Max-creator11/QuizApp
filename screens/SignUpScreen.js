import React from 'react'
import {View, Text} from 'react-native'

const SignUpScreen = ({navigation}) => {
  return (
    <View>
      <Text>That's a signUp screen</Text>
        <Text onPress={() => navigation.navigate('SignInScreen')}>SignInScreen</Text>
    </View>
  )
}

export default SignUpScreen