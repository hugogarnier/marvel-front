import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length > 4) {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_URI}/user/login`,
          {
            email,
            password,
          }
        );
        // console.log(response.data.token);
        response.data.token && setUser(response.data.token);
        navigate("/favorites");
      } catch (error) {
        console.log(error.message);
        error.response.status === 401 && setError("Mauvais mot de passe/email");
      }
    } else {
      setErrorPassword("Le mot de passe doit être supérieur à 4 caractères !");
    }
  };

  return (
    <div className='signup-login-container'>
      <form className='forms' onSubmit={handleSubmit}>
        <h1>Se connecter</h1>

        <input
          type='email'
          name='email'
          id='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          name='password'
          id='password'
          placeholder='Mot de passe'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setErrorPassword("");
          }}
        />
        {errorPassword && (
          <label className='label-error' htmlFor='password'>
            {errorPassword}
          </label>
        )}
        {error && (
          <label className='label-error' htmlFor='password'>
            {error}
          </label>
        )}

        <input type='submit' value='Se connecter' />
        <Link to='/signup'>Pas de compte ? S'inscrire</Link>
      </form>
    </div>
  );
};

export default Login;
