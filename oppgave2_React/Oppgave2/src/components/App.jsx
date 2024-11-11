import { useState } from 'react'
import './CSS/App.css'
import MyHobbies from './MyHobbies'
import Profil from './profil'
import MyList from './MyList'
import List from './list'
import Tommer from './tommer'
import Partall from './partall'
import Partall_2 from './partall_2'
import Home from './home'
import About from './about'
import Layout from './layout'
import NoPage from './noPage'


import{BrowserRouter,Routes,Route} from 'react-router-dom'


  //En react komponent er en JS funksjon som retunerer en HTML tag
  function App() {
  

    return (
      <>

          <BrowserRouter>

          <Layout></Layout>

          <Routes>

              <Route path='/'/>


                <Route index element={<Home />}/>
                <Route path='about' element={<About></About>}/>
                <Route path='profil' element={<Profil></Profil>}/>
                <Route path='tommer' element={<Tommer></Tommer>}/>
                
                <Route path='*' element={<NoPage></NoPage>}/>

          </Routes>
          
          </BrowserRouter>
   

        
      
      </>
    )
  }


  export default App
