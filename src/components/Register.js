import React from 'react';
import { Link } from 'react-router-dom';

function Register({ onRegister }) {
  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister();
  }

  return (
    <>
      <div className="sign">
        <p className="sign__heading">Регистрация</p>
        <form className="sign__form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="sign__input"
            placeholder="Email"
          />
          <input
            type="password"
            className="sign__input"
            placeholder="Пароль"
          />
          <button type="submit" className="sign__button">Зарегистрироваться</button>
        </form>
        <div className="sign__signin">
          <span>Уже зарегистрированы?</span>
          <Link to="./sign-in" className="sign__link">Войти</Link>
        </div>
      </div>
    </>
  );
}

export default Register;