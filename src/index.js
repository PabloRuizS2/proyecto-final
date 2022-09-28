import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './assets/css/main.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDP7fc9RysVtESVBoaIMn8weQXfC-fToro',
  authDomain: 'laissezfaire-3af8d.firebaseapp.com',
  databaseURL: 'https://laissezfaire-3af8d-default-rtdb.firebaseio.com',
  projectId: 'laissezfaire-3af8d',
  storageBucket: 'laissezfaire-3af8d.appspot.com',
  messagingSenderId: '157642664069',
  appId: '1:157642664069:web:d0b14d59c667c7b33661ec'
}

// Initialize Firebase
initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
