import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";

import Header from "./components/Header";
import Comics from "./pages/Comics";
import Characters from "./pages/Characters";
import Favorites from "./pages/Favorites";
import CardInfo from "./pages/CardInfo";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
require("dotenv").config();

function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);
  const setUser = (token) => {
    if (token) {
      Cookies.set("token", token, { expires: 10 });
    } else {
      Cookies.remove("token");
    }
    setToken(token);
  };
  return (
    <Router>
      <Header setToken={setToken} token={token} setUser={setUser} />
      <Routes>
        <Route path='/' exact element={<Characters token={token} />} />
        <Route path='/comics' element={<Comics token={token} />} />
        <Route path='/favorites' element={<Favorites token={token} />} />
        <Route path='/character/:id' element={<CardInfo token={token} />} />
        <Route path='/login' element={<Login setUser={setUser} />} />
        <Route path='/signup' element={<Signup setUser={setUser} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
