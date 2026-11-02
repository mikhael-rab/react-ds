import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom' 
import Newlogin from './pages/Newlogin'

function App() {

  return (
    <>   
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}/>
        <Route path='/newlogin' element={<Newlogin/>}/>
      </Routes>

      </BrowserRouter>
    </>
  )
}

export default App    
