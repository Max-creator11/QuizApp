import React, { useState } from 'react'
import {View, Text, KeyboardAvoidingView} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { createQuestion } from '../firebase'
import { FormButton, FormInput } from './components'
const AddQuestionScreen = ({navigation, route}) => {
    const [currentQuizId, setCurrentQuizId] = useState(route.params.currentQuizId)
    const [currentQuizTitle, setCurrentQuizTitle] = useState(route.params.currentQuizTitle)

    const [question, setQuestion] = useState('')
    const [correctAnswer, setCorrectAnswer] = useState('')
    const [optionTwo, setOptionTwo] = useState('')
    const [optionThree, setOptionThree] = useState('')
    const [optionFour, setOptionFour] = useState('')

    const handleQuestionSave = async () => {
        if(
            question == '' ||
            correctAnswer== '' ||
            optionTwo == '' ||
            optionThree == '' ||
            optionFour == '' 
        ) {
            alert('enter all data!')
            return;
        }
        let currentQuestionId = Math.floor(10000 * Math.random() * 9000).toString();

        await createQuestion(currentQuizId, currentQuestionId, {
            question:question,
            corrent_answer:correctAnswer,
            incorrent_answers: [optionTwo, optionThree, optionFour]
        })
        alert('question saved!');
        setQuestion('');
        setCorrectAnswer('');
        setOptionTwo('');
        setOptionThree('');
        setOptionFour('');
    }

  return (
        <KeyboardAvoidingView style={{
            flex:1,
        }}>
            <ScrollView style={{
                flex:1,
                backgroundColor:'white',

            }}>
                <View style={{padding: 20}}>
                    <Text style={{fontSize:20, textAlign:'center', color:'black'}}>
                        Add Question
                    </Text>
                    <Text style={{ textAlign:'center', color:'black'}}>
                        For <span style={{color:'blue', fontWeight:'bold'}}>{currentQuizTitle}</span>
                    </Text>

                    <FormInput 
                        labelText='Question'
                        placeholderText = 'Enter Question'
                        onChangeText={val => setQuestion(val)}
                        value = {question}
                    />

                    <View style={{marginTop:30}}>
                        <FormInput 
                            labelText='Correct Answer'
                            onChangeText={val => setCorrectAnswer(val)}
                            value = {correctAnswer}
                        />
                         <FormInput 
                            labelText='Option 2'
                            onChangeText={val => setOptionTwo(val)}
                            value = {optionTwo}
                        />
                         <FormInput 
                            labelText='Option 3'
                            onChangeText={val => setOptionThree(val)}
                            value = {optionThree}
                        />
                         <FormInput 
                            labelText='Option 4'
                            onChangeText={val => setOptionFour(val)}
                            value = {optionFour}
                        />
                    </View>
                    <FormButton
                        labelText='Save Question'
                        handleOnPress={handleQuestionSave}
                    />
                    <FormButton
                        labelText='Go Home' 
                        isPrimary={false}
                        handleOnPress={() => {
                            setCurrentQuizId('');
                            navigation.navigate('HomeScreen');
                        }}
                        style={{
                            marginTop:20,
                        }}
                    />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
  )
}

export default AddQuestionScreen