// import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";

import { ReactComponent as Logo } from "../assets/marvel.svg";

const Header = ({ token, setUser }) => {
  const navigate = useNavigate();
  const handleDisconnect = () => {
    setUser(null);
    navigate("/");
  };
  return (
    <header>
      <nav className='container'>
        <div className='menu'>
          <Link to='/comics'>Comics</Link>
          <Logo width={100} height={100} onClick={() => navigate("/")} />
          {token ? (
            <>
              <Link to='/favorites'>Favoris</Link>
              <svg
                className='logout'
                onClick={handleDisconnect}
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                <path d='M0 2v20h14v-2h-12v-16h12v-2h-14zm18 7.408l2.963 2.592-2.963 2.592v-1.592h-8v-2h8v-1.592zm-2-4.408v4h-8v6h8v4l8-7-8-7z' />
              </svg>
            </>
          ) : (
            <Link to='/login'>Login</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
