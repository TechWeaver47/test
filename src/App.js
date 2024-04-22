import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Signup from './Component/Signup';
import Login from './Component/Login';
import Register from './Component/Register';
import { BrowserRouter, Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <dic>
          <Navbar/>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
          </Routes>
        </dic>

      </BrowserRouter>
  

    
      
    </div>
  );
}

export default App;
