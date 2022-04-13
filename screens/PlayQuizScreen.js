import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { View, Text, Modal } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getQuizById, getQuestionsByQuizId } from '../firebase'

let stateArray = []
const PlayQuizScreen = ({navigation, route}) => {
    const [currentQuizId, setCurrentQuizId] = useState(route.params.quizId)
    const [title, setTitle] = useState('')
    const [questions, setQuestion] = useState([])
    const [correctCount, setCorrectCount] = useState(0)
    const [inCorrectCount, setIncorrectCount] = useState(0)
    const [isAllowed, setIsAllowed] = useState(false)
    const [isDisabledToClick, setIsDisabledToClick] = useState(true)
    const getQuizAndQuestionDetails = async () => {
        let currentQuiz = await getQuizById(currentQuizId)
        currentQuiz = currentQuiz.data()
        setTitle(currentQuiz.title)

        const questionsFetch = await getQuestionsByQuizId(currentQuizId)
        let tempQuestions = []
        await questionsFetch.docs.forEach(async res => {
            let question = res.data()

            
            await tempQuestions.push(question)
        })
        setQuestion(tempQuestions)

    }
   

    useEffect(() => {
        stateArray=[]
        getQuizAndQuestionDetails()
        
    },[])

    useEffect(() => {
        if(correctCount + inCorrectCount == questions.length && questions.length !=0){
            setIsDisabledToClick(false)
        }
    }, [correctCount, inCorrectCount])

    

   

  return (
      
     <SafeAreaView
     style={{
         flex:1,
         position:'relative',
     }}>
         <StatusBar backgroundColor='white'/>
         <View style={{
             flexDirection:'row',
             alignItems:'center',
             justifyContent:'space-between',
             paddingVertical:10,
             paddingHorizontal:20,
             backgroundColor:'white',
             elevation:4,

         }}>

             <Text style={{color:'red'}} onPress={() => navigation.navigate('HomeScreen')}>Back</Text>

             <Text style={{fontSize:16, marginLeft:10}}>{title}</Text>
             
             <View style={{
                 flexDirection:'row',
                 alignItems:'center',
                 justifyContent:'center',
             }}>
                 <View style={{
                     backgroundColor:'green',
                     flexDirection:'row',
                     alignItems:'center',
                     justifyContent:'center',
                     paddingHorizontal:10,
                     paddingVertical:4,
                     borderTopLeftRadius:10,
                     borderBottomLeftRadius:10,
                 }}>
                     <Text style={{color:'white'}}>{isAllowed? correctCount : 0}</Text>
                 </View>


                 <View style={{
                     backgroundColor:'red',
                     flexDirection:'row',
                     alignItems:'center',
                     justifyContent:'center',
                     paddingHorizontal:10,
                     paddingVertical:4,
                     borderTopRightRadius:10,
                     borderBottomRightRadius:10,
                 }}>
                     <Text style={{color:'white'}}>{isAllowed? inCorrectCount : 0}</Text>
                 </View>
             </View>

            
         </View>
         <View style={{
                 flex:1,
             }}>
                 {questions.map((item, index) => (
                     <View style={{
                         marginTop:14,
                         marginHorizontal:10,
                         backgroundColor:"white",
                         elevation:2,
                         borderRadius:6,
                         }} 
                     key={index}>
                    <View style={{padding:20}}>
                         <Text style={{fontSize:16}}>{index + 1}. {item.question}</Text>
                    </View>
                    {item.allOptions.map((option, optionIndex) => (
                           
                        <TouchableOpacity key={optionIndex}  style={{
                            paddingVertical:14,
                            paddingHorizontal:20,
                            borderTopWidth:1,
                            borderColor:'#E7DEDC',
                            flexDirection:'row',
                            alignItems:'center',
                            justifyContent:'flex-start'
                           
                        }}
                        onPress={()=>{
                            let select = option;
                            let selectedDoc = item.question;
                            if(stateArray.includes(selectedDoc)){
                                return
                            }

                            if (select == item.correct_answer){
                                setCorrectCount(correctCount + 1)
                                
                            } else{
                                setIncorrectCount(inCorrectCount + 1)
                            }
                        stateArray.push(selectedDoc)
                            
                        }}
                        >
                            
                            <Text style={{
                                width:25,
                                height:25,
                                padding:2,
                                borderWidth:1,
                                borderColor:"#E7DEDC",
                                textAlign:'center',
                                marginRight:16,
                                borderRadius:25
                            }}>{optionIndex + 1}. </Text>
                            <Text>{option}</Text>
                            </TouchableOpacity>
                    ))}
                    </View>
                 ))}
                <TouchableOpacity style={{
                    marginLeft:40,
                    marginRight:40,
                    marginBottom:20,
                    textAlign:'center',
                    marginTop:20,
                    padding:10,
                     borderRadius:50,
                     backgroundColor: isDisabledToClick? 'grey' : 'blue',
                     
                }} 
                disabled={isDisabledToClick}
                onPress={() => setIsAllowed(true)}>
                   <Text style={{
                       color:'white',
                   }}>Show Results</Text>

                </TouchableOpacity>

             </View>
            
    </SafeAreaView>
  )
}   

export default PlayQuizScreen