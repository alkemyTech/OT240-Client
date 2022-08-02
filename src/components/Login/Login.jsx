import React from 'react';
import login from './styles/Login.module.scss';

const Login = () => {
  return (
    <div className={login.container}>
      <div className={login.formContainer}>
          <p className={login.bienvenido}> Bienvenido </p>
          <h4>Inicia sesión en tu cuenta!</h4>
          <form>
              <input placeholder='Email'/>
              <input placeholder='Contraseña'/>
          </form>
          <button> Inicia sesión</button>
          <p className={login.registro}>No tienes una cuenta? <a href='/registro'>Registrate </a></p>
      </div>
        <img src="/images/Login-image.png" alt='login'/>
    </div>
  );
};

export default Login;