import Signup from "./pages/signup/Signup";
import {Routes,Route} from 'react-router-dom';
import Home from './pages/home/Home'
import Login from './pages/login/Login';
function App() {
  
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>

    </div>
  );
}

export default App;
