
import './App.css';
import {Routes,Route} from 'react-router-dom';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Header from './components/Header';

function App() {
 

  return (
    <>
    <Header/>
      <Routes>
       <Route path='/' element={<About/>}/>
       <Route path='/signIn' element={<SignIn/>}/>
       <Route path='/signUp' element={<SignUp/>}/>
       <Route path='/profile' element={<Profile/>}/>

      </Routes>
    </>
  )
}

export default App
