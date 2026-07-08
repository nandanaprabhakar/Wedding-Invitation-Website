import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import LandingPage from './Pages/LandingPage'

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/l' element={<HomePage/>}/>
      </Routes>
    </>
  )
}

export default App
