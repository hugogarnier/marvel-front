import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";

import Header from "./components/Header";
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Characters from "./pages/Characters";
import Favorites from "./pages/Favorites";
require("dotenv").config();

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/comics' element={<Comics />} />
        <Route path='/characters' element={<Characters />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;
