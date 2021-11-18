// import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { ReactComponent as Logo } from "../assets/marvel.svg";

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <header>
      <nav className='container'>
        <div className='menu'>
          <Link to='/comics' onClick={handleOpen}>
            Comics
          </Link>
          <Logo width={100} height={100} onClick={() => navigate("/")} />
          <Link to='/favorites' onClick={handleOpen}>
            Favoris
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
