import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      Вход
      <Link to="./sign-up">Регистрация</Link>
    </div>
  );
}

export default Login;