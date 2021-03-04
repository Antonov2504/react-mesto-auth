import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as auth from './../utils/auth';

function Login({ handleLogin, handleError }) {
  const history = useHistory();
  const [userData, setUserData] = useState({
    password: '',
    email: ''
  })

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
    if (!password || !email) {
      return;
    }
    auth.authorize(password, email)
      .then(data => {
        if (data.token) {
          handleLogin(email);
          history.push('/');
        } else {
          handleError(evt.target, data);
        }
      })
      .catch(err => console.log(err));                                          // По указанным Логину и Паролю пользователь не найден. Проверьте введенные данные и повторите попытку. 
  }

  return (
    <>
      <div className="sign">
        <p className="sign__heading">Вход</p>
        <form
          name="login-form"
          className="sign__form"
          onSubmit={handleSubmit}>
          <fieldset className="sign__fieldset">
            <input
              type="text"
              name="email"
              value={userData.email}
              className="sign__input"
              onChange={handleChange}
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              value={userData.password}
              className="sign__input"
              onChange={handleChange}
              placeholder="Пароль"
            />
          </fieldset>
          <button type="submit" className="sign__button">Войти</button>
        </form>
      </div>
    </>
  );
}

export default Login;