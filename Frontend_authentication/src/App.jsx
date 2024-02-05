
import './App.css';
import {Routes,Route} from 'react-router-dom';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';

function App() {
 

  return (
    <>
    <Header/>
      <Routes>
       <Route path='/' element={<About/>}/>
       <Route path='/signIn' element={<SignIn/>}/>
       <Route path='/signUp' element={<SignUp/>}/>
       <Route element={<PrivateRoute/>}>

       <Route path='/profile' element={<Profile/>}/>
       </Route>

      </Routes>
    </>
  )
}

export default App
