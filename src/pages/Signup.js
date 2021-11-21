import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import logo from "../assets/deadpool-signup.png";

const Signup = ({ setUser }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length > 4) {
      const bodyForm = new FormData();
      bodyForm.append("email", email);
      bodyForm.append("password", password);

      try {
        // eslint-disable-next-line
        const response = await axios.post(
          `${process.env.REACT_APP_URI}/user/signup`,
          bodyForm,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        // console.log(response.data);
        response.data.token && setUser(response.data.token);
        navigate("/");
      } catch (error) {
        setErrorEmail(error.response.data.message);
        console.log(error.message);
      }
    } else {
      setErrorPassword("Le mot de passe doit être supérieur à 4 caractères !");
    }
  };

  return (
    <div className='signup-login-container'>
      <img src={logo} alt='deadpool' />
      <form className='forms' onSubmit={handleSubmit}>
        <h1>S'inscrire</h1>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errorEmail && (
          <label className='label-error' htmlFor='email'>
            {errorEmail}
          </label>
        )}
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
        <input type='submit' value="S'inscrire" />
      </form>
    </div>
  );
};

export default Signup;
