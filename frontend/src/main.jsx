import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import Header from './components/HeaderApp'
import "./assets/styles/main.scss"



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Home />
  </React.StrictMode>,
)
