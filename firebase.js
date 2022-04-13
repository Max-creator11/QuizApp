import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import {getFirestore, setDoc, addDoc, doc} from 'firebase/firestore'
const app = firebase.initializeApp ({
        apiKey: "---",
        authDomain: "---",
        projectId: "---",
        storageBucket: "---",
        messagingSenderId: "---",
        appId: "---"
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
