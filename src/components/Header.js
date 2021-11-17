// import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { ReactComponent as Logo } from "../assets/marvel.svg";

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <header className='container'>
      <Logo width={100} height={100} onClick={() => navigate("/")} />
      <nav>
        <svg
          className={open ? "burger active" : "burger inactive"}
          onClick={handleOpen}
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
        >
          <path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.568 18.005l-1.414-1.415 4.574-4.59-4.574-4.579 1.414-1.416 5.988 5.995-5.988 6.005z' />
        </svg>
        <svg
          className={open ? "burger inactive" : "burger active"}
          onClick={handleOpen}
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
        >
          <path d='M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm7.58 0l5.988-5.995 1.414 1.416-4.574 4.579 4.574 4.59-1.414 1.416-5.988-6.006z' />
        </svg>
        <div className={open ? "menu open" : "menu close"}>
          <Link to='/characters' onClick={handleOpen}>
            Personnages
          </Link>
          <Link to='/comics' onClick={handleOpen}>
            Comics
          </Link>
          <Link to='/favorites' onClick={handleOpen}>
            Favoris
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
