import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Person from './pages/Person';
import DetailPage from './pages/DetailPage';
import ResetPassword from './pages/ResetPassword';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/signup" element={<SignUp />} />
        <Route  path="/login" element={<LogIn />} />
        <Route  path="/person" element={<Person />} />
        <Route  path="/reset-password" element={<ResetPassword />} />
        <Route path="/detail/:mediaType/:id" element={<DetailPage/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
