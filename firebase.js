import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const app = firebase.initializeApp ({
        apiKey: "AIzaSyBxZQx-WDLkqxkyYJ5puXk0Ja5jZeIUgKg",
        authDomain: "quiz-app-b7e0f.firebaseapp.com",
        projectId: "quiz-app-b7e0f",
        storageBucket: "quiz-app-b7e0f.appspot.com",
        messagingSenderId: "895008378936",
        appId: "1:895008378936:web:e3f889e185eca0679196cd"
    })

export const auth = app.auth()

export default app;
