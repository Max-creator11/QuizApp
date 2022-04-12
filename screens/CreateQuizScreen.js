import React, { useState } from 'react'
import {View, Text} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FormInput, FormButton } from './components';
import { createQuiz } from '../firebase';
const CreateQuizScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


    const handleQuizSave = async () => {
        const currentQuizId = Math.floor(10000*Math.random()*9000).toString();
        if(title!==''){
        await createQuiz(currentQuizId, title, description)
        navigation.navigate('AddQuestionScreen', {
            currentQuizId:currentQuizId,
            currentQuizTitle:title,
        })
        } else {
            alert('Enter Title!')
        }
    }

  return (
    <SafeAreaView
        style={{
            flex:1,
            backgroundColor:'white',
            padding:20,

    }}>
        <Text
            style={{
                fontSize:20,
                textAlign:'center',
                marginVertical:20,
                fontWeight:'bold',
                color:'black'
            }}
        >CreateQuiz
        </Text>

        <FormInput
         labelText='Title'
         placeholderText = 'Enter Quiz Title'
         onChangeText = {val => setTitle(val)}
         value = {title}
        />

        <FormInput
         labelText='Description'
         placeholderText = 'Enter Quiz Description'
         onChangeText = {val => setDescription(val)}
         value = {description}
        />

        <FormButton
            labelText='Save Quiz'
            handleOnPress={handleQuizSave}
        />
        
    </SafeAreaView>
  )
}

export default CreateQuizScreen