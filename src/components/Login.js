import React from 'react';

function Login({ onLogin }) {
  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin();
  }

  return (
    <>
      <div className="sign">
        <p className="sign__heading">Вход</p>
        <form className="sign__form" onSubmit={handleSubmit}>
          <fieldset className="sign__fieldset">
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
          </fieldset>
          <button type="submit" className="sign__button">Войти</button>
        </form>
      </div>
    </>
  );
}

export default Login;