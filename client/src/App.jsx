import { Routes, Route, Link, Form } from 'react-router-dom';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import BooksStore from './components/BooksStore';
import Navbar from './components/Navbar';





function App() {


  return (
    <div>
      <Navbar />
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<BooksStore />}></Route>
        </Routes>


      </BrowserRouter>
    </div>
  )
}

export default App;
