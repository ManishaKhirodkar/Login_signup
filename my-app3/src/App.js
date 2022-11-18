import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Nav from './components/Nav';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
