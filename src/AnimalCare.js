import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import { Authorized } from './components/views/Authorized';
import { ApplicationViews } from './components/views/ApplicationViews';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { NavBar } from './components/nav/NavBar';
import './App.css';


function AnimalCare() {
  return (
  <Router>
  <Routes>
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />

  <Route path="*" element={
    // <Authorized>
      <>
        <NavBar />
        <ApplicationViews />
      </>
    // </Authorized>

  } />
</Routes>
</Router>
  );
}

export default AnimalCare;