import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import {getFirestore, setDoc, addDoc, doc} from 'firebase/firestore'
const app = firebase.initializeApp ({
        apiKey: "AIzaSyBxZQx-WDLkqxkyYJ5puXk0Ja5jZeIUgKg",
        authDomain: "quiz-app-b7e0f.firebaseapp.com",
        projectId: "quiz-app-b7e0f",
        storageBucket: "quiz-app-b7e0f.appspot.com",
        messagingSenderId: "895008378936",
        appId: "1:895008378936:web:e3f889e185eca0679196cd"
    })

export const auth = app.auth()
const firestore = getFirestore();
const db = firebase.firestore();

export const createQuiz = (currentQuizId, title, description) => {
    setDoc(doc(firestore, 'Quizzes', currentQuizId), {
        title:title,
        description:description
    })
    
}

export const createQuestion = (currentQuizId, currentQuestionId, question) => {
    db.collection('Quizzes').doc(currentQuizId).collection('QNA').doc(currentQuestionId).set(question);
    {/* 35:35 video 2*/}
        
}

export const getQuizzes = () => {
    return db.collection('Quizzes').get();
}

export const getQuizById = currentQuizId => {
    return db.collection('Quizzes').doc(currentQuizId).get()
}

export const getQuestionsByQuizId = currentQuizId => {
    return db.collection('Quizzes').doc(currentQuizId).collection('QNA').get()
}


export default app;
