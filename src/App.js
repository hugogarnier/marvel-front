import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Cookies from "js-cookie";

import Header from "./components/Header";
import Comics from "./pages/Comics";
import Characters from "./pages/Characters";
import Favorites from "./pages/Favorites";
import CardInfo from "./pages/CardInfo";
require("dotenv").config();

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' exact element={<Characters />} />
        <Route path='/comics' element={<Comics />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/character/:id' element={<CardInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
