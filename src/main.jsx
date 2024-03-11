import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="361921712164-rcppcfcspv3jh0lb3tflv22jfaae3iuc.apps.googleusercontent.com">
    <App /></GoogleOAuthProvider>
  </React.StrictMode>,
)
