import '../styles/Ingresar.css';
import React from 'react';


const Ingresar = () => {
  return (
    <div className="ingresar-container">
      <h1>Inicia Sesión</h1>
      <form className="login-form">
        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" placeholder="ejemplo@correo.com" />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" placeholder="********" />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
      <p>¿No tienes cuenta? <a href="#!">Regístrate aquí</a></p>
    </div>
  );
};

export default Ingresar;
