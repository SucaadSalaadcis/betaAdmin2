 
import { Route, Routes } from 'react-router-dom'
 import { Dashboard } from './Dashboard/Dashboard'
import { Clients } from './clients/client'
import Services from './Services/services'
import { About } from '../about/About'
import {Contact} from '../contact/Contact'
import Home from './Home/Home'
import NotFound from '../NotFound'
 

function App() {


  return (
    <>

    <Routes>
      <Route path='/' element={<h1>Login page ...</h1>}/>
      <Route path='*' element={<NotFound/>}/>
      <Route path='dashboard' element={<Dashboard/>} >
      <Route path='client' element={<Clients/>}/>
      <Route path='services' element={<Services/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contactForm' element={<Contact/>}/>
      <Route path='home' element={<Home/>}/>
     </Route>
    </Routes>
 

    </>
  )
}

export default App
