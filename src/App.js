import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Details from "./components/Details/Details";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

export const UserContext = createContext();

function App() {
  const [loggedInuser, setLoggedInUser] = useState({
    email: '',
    name: '',
    error: '',
    success: false,
    isActive: false,
    password: ''
  });
  return (
    <UserContext.Provider value={[loggedInuser, setLoggedInUser]}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/createAccount" element={<Register />} />
      <Route path="/details" element={<Details />} />
    </Routes>
    </UserContext.Provider>
  );
}

export default App;
