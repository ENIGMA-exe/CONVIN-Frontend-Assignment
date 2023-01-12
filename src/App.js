
import React from 'react'
import Main from './Main_page'
import History from './History_page'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Main/>} />
            <Route exact path='/history' element={<History/>} />
        </Routes>
    </BrowserRouter>
  )
}
