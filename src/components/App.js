import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ConfirmationPopup from './ConfirmationPopup';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import avatarDefault from './../images/profile__avatar.svg';
import Login from './Login';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute';
import InfoTooltip from './InfoTooltip';
import statusSuccessImage from './../images/success.svg';
import statusErrorImage from './../images/error.svg';
import { statusSuccessText, statusErrorText } from './../utils/constants';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);                       // Стейт попап редактирования профиля открыт
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);                             // Стейт попап добавить карточку открыт
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);                         // Стейт попап редактирования аватара открыт
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(false);                     // Стейт попап подтверждения удаления карточки открыт
  const [selectedCard, setSelectedCard] = useState(null);                                            // Стейт выбранная карточка для передачи картинки карточки в попап
  const [deletedCard, setDeletedCard] = useState(null);                                              // Стейт выбранная карточка для удаления
  const [currentUser, setCurrentUser] = useState({                                                   // Стейт данные текущего пользователя
    name: '',
    about: '',
    avatar: avatarDefault
  });
  const [cards, setCards] = useState([]);                                                            // Стейт массив карточек
  const [loggedIn, setLoggedIn] = useState(false);                                                    // Стейт-переменная статус пользователя, вход в систему
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);                                 // Стейт попап редактирования аватара открыт
  const [isNavOpened, setIsNavOpened] = useState(false);                                             // Стейт мобильная навигация открыта
  const [statusImage, setStatusImage] = useState(statusSuccessImage);                                // Стейт картинки-статуса запроса Login/Register
  const [statusText, setStatusText] = useState(statusSuccessText);                                   // Стейт текста-статуса запроса Login/Register

  // Обработчик клика по аватару
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  // Обработчик клика по кнопке редактирования профиля
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  // Обработчик клика по кнопке добавить карточку
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  // Обработчик клика по кнопке удалить карточку
  function handleCardDelete(card) {
    setIsConfirmationPopupOpen(true);
    setDeletedCard(card);
  }

  // Функция закрытия всех попапов
  function closeAllPopups() {
    setIsInfoTooltipOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsConfirmationPopupOpen(false);
    setSelectedCard(null);
  }

  // Обработчик клика по картинке карточки
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleUpdateUser(userInfo) {
    api.editProfile(userInfo)
      .then(data => {
        setCurrentUser({ ...data });
        closeAllPopups();
      })
      .catch(err => console.log(err));
  }

  function handleUpdateAvatar({ avatar }) {
    api.updateAvatar(avatar)
      .then(data => {
        setCurrentUser({ ...data });
        closeAllPopups();
      })
      .catch(err => console.log(err));
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked)
      .then(newCard => {
        const newCards = cards.map(c => c._id === card._id ? newCard : c);
        setCards(newCards);
      })
      .catch(err => console.log(err));
  }

  function handleCardDeleteSubmit(cardId) {
    api.deleteCard(cardId)
      .then(() => {
        const newCards = cards.filter(c => c._id !== cardId);
        setCards(newCards);
        closeAllPopups();
      })
      .catch(err => console.log(err));
  }

  function handleAddPlaceSubmit(cardInfo) {
    api.addCard(cardInfo)
      .then(newCard => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch(err => console.log(err));
  }

  // Обработчик по кнопке Войти
  function handleLogin() {
    setIsInfoTooltipOpen(true);
    console.log(statusSuccessImage);
  }

  // Обработчик клика по меню
  function handleNavClick() {
    setIsNavOpened(!isNavOpened);
    console.log('Click Nav');
  }

  // Загрузка карточек по умолчанию
  useEffect(() => {
    api.getInitialCards()
      .then(initialCards => {
        setCards(initialCards);
      })
      .catch(err => console.log(err));
  }, []);

  // Добавить/удалить слушателя нажатия Esc при открытии попапа
  useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === 'Escape') {
        closeAllPopups();
      };
    }

    (isEditProfilePopupOpen
      || isInfoTooltipOpen
      || isAddPlacePopupOpen
      || isEditAvatarPopupOpen
      || isConfirmationPopupOpen
      || selectedCard) && document.addEventListener('keydown', handleEscClose);

    return () => {
      document.removeEventListener('keydown', handleEscClose);
    }
  }, [isInfoTooltipOpen, isEditProfilePopupOpen, isAddPlacePopupOpen, isEditAvatarPopupOpen, isConfirmationPopupOpen, selectedCard]);

  // Загрузка данных пользователя
  useEffect(() => {
    api.getUserInfo()
      .then(data => {
        setCurrentUser({ ...data });
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__container">
        <Header
          loggedIn={loggedIn}
          isNavOpened={isNavOpened}
          onClickNav={handleNavClick}
        />
        <Switch>
          <Route path="/sign-up">
            <Register onRegister={handleLogin} />
          </Route>
          <Route path="/sign-in">
            {/* {loggedIn
              ? <Redirect to="/" />
              : <Login onLogin={handleLogin} />
            } */}
            <Login onLogin={handleLogin} />
          </Route>
          <ProtectedRoute
            exact path="/"
            loggedIn={loggedIn}
            component={Main}
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            cards={cards}
          >
          </ProtectedRoute>
          <Route path="/">
            <Redirect to="/" />
          </Route>
        </Switch>
        {loggedIn && <Footer />}
        {/* <!-- Попап редактировать профиль --> */}
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        {/* <!-- Попап добавить карточку --> */}
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />
        {/* <!-- Попап картинка --> */}
        <ImagePopup
          onClose={closeAllPopups}
          card={selectedCard}
        />
        {/* <!-- Попап удаления карточки --> */}
        <ConfirmationPopup
          isOpen={isConfirmationPopupOpen}
          onClose={closeAllPopups}
          onCardDelete={handleCardDeleteSubmit}
          card={deletedCard}
        />

        {/* <!-- Попап обновить аватар --> */}
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        {/* <!-- Попап статус подтверждение --> */}
        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closeAllPopups}
          statusImage={statusImage}
          statusText={statusText}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
