import React, { useEffect, useState } from 'react'
import {StyleSheet, View, Text} from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { auth } from '../firebase'
import { FormButton } from './components'
import { getQuizzes } from '../firebase'

const HomeScreen = ({navigation}) => {
  const [allQuizzes, setAllQuizzes] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const getAllQuizzes = async () => {
      setRefreshing(true)
      const quizzes = await getQuizzes()
      let tempQuizzes = [];
      await quizzes.docs.forEach(async quiz => {
        await tempQuizzes.push({id:quiz.id, ...quiz.data()})
      })
      await setAllQuizzes([...tempQuizzes])
      setRefreshing(false)
      console.log(allQuizzes)
  }

  const handleLogOut = () => {
    auth.signOut().then(navigation.navigate('SignInScreen')).catch(error => alert(error.message))
  }

  useEffect(()=>{
    getAllQuizzes()
  },[])

  return (
    <>
    <View style={styles.container}>
        <Text >{auth.currentUser?.email}</Text>
   
    <Text style={styles.logout} onPress={handleLogOut}>
      Logout
      </Text>
    </View>

   
   
   {allQuizzes.map((quiz,id) => (
      <View key={id} style={styles.render_item}>
      <View style={{flex:1, paddingRight:10}}>
        <Text>{quiz.title}</Text>
        {quiz.description!==''? <Text style={{opacity:0.5,}}>{quiz.description}</Text> : null}
      </View>
      <TouchableOpacity style={{
        paddingVertical:10,
        paddingHorizontal:30,
        borderRadius:50,
        backgroundColor:'blue',
      }}>
        <Text style={{color:'white'}}>Play</Text>
      </TouchableOpacity>
    </View>
     ))}
    <View style={styles.container}>
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
    marginTop:5,
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
    flexDirection:'row',
   
  },
  logout:{
    color:'red',
    fontSize:16,
  },
  render_item:{
    padding:20,
    borderRadius:15,
    marginVertical:15,
    marginHorizontal:10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:'white',
    elevation:2,
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