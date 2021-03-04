import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as auth from './../utils/auth';

function Register({ handleRegister, handleError }) {
  const history = useHistory();
  const [userData, setUserData] = useState({
    password: '',
    email: ''
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setUserData({
      ...userData,
      [name]: value
    })
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const { password, email } = userData;
    auth.register(password, email)
      .then(res => {
        if (res !== 400) {
          handleRegister();
          history.push('./sign-in');
        } else {
          handleError(evt.target, res);
        }
      })
      .catch(err => console.log(err));                                                                // Обработка ошибки handleError();
  }

  return (
    <>
      <div className="sign">
        <p className="sign__heading">Регистрация</p>
        <form
          name="register-form"
          className="sign__form"
          onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            value={userData.email}
            className="sign__input"
            onChange={handleChange}
            placeholder="Email"
            autoComplete="off"
            required
          />
          <input
            type="password"
            name="password"
            value={userData.password}
            className="sign__input"
            onChange={handleChange}
            placeholder="Пароль"
            autoComplete="off"
            required
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