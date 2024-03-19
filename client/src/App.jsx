import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CreateUser from './CreateUser'
import UpdateUsers from './UpdateUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users />}></Route>
        <Route path='/create' element={<CreateUser />}></Route>
        <Route path='/update' element={<UpdateUsers />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
      
    
  )
}

export default App
