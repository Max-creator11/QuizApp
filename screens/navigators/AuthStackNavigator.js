import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { HomeScreen, SignInScreen, SignUpScreen, AddQuestionScreen, CreateQuizScreen, PlayQuizScreen} from '..'

const Stack = createStackNavigator()

const AuthStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name ="SignInScreen" component={SignInScreen}/>
            <Stack.Screen name ="SignUpScreen" component={SignUpScreen}/>
            <Stack.Screen name = "HomeScreen" component ={HomeScreen}/>
            <Stack.Screen name ="AddQuestionScreen" component={AddQuestionScreen}/>
            <Stack.Screen name ="CreateQuizScreen" component={CreateQuizScreen}/>
            <Stack.Screen name='PlayQuizScreen'component={PlayQuizScreen}/>
        </Stack.Navigator>
    )
}

export default AuthStackNavigator