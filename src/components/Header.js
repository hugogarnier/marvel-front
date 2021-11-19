// import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";

import { ReactComponent as Logo } from "../assets/marvel.svg";

const Header = ({ token }) => {
  const navigate = useNavigate();
  return (
    <header>
      <nav className='container'>
        <div className='menu'>
          <Link to='/comics'>Comics</Link>
          <Logo width={100} height={100} onClick={() => navigate("/")} />
          {token ? (
            <Link to='/favorites'>Favoris</Link>
          ) : (
            <Link to='/login'>Login</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
