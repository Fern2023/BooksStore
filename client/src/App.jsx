import { Routes, Route, Link, Form } from 'react-router-dom';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Zindex from './components/Zindex';
import BooksStore from './components/BooksStore';
import Navbar from './components/Navbar';

import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';




function App() {


  return (
    <div
    // className='bg-zinc-800'
    >
      <Navbar />


      <Routes>
        {/* <Route path='/' element={<BooksStore />}></Route> */}
        <Route path='/' element={<Zindex />} />


        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegisterForm />} />

      </Routes>


    </div>
  )
}

export default App;
