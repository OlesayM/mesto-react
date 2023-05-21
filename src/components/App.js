import React from 'react';
import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({}); 

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleCardClick (card) {
    setSelectedCard(card);
    }
  

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main
          onEditProfil={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          title="Редактировать профиль"
          buttonText="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <fieldset className="formset">
            <input
              id="username-input"
              className="popup__input popup__input_field_username"
              name="name"
              type="text"
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="popup__error username-input-error"></span>
            <input
              id="occupation-input"
              className="popup__input popup__input_field_occupation"
              name="about"
              type="text"
              placeholder="О себе"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="popup__error occupation-input-error"></span>
          </fieldset>
        </PopupWithForm>
        <PopupWithForm
          title="Обновить аватар"
          buttonText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            id="avatar-input"
            type="url"
            className="popup__input popup__input_field_avatar"
            name="avatar"
            required
            placeholder="Введите ссылку на аватар"
            minLength="2"
            maxLength="200"
          />
          <span className="popup__error avatar-input-error"></span>
        </PopupWithForm>
        <PopupWithForm
          title="Новое место"
          buttonText="Сохранить"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <fieldset className="formset">
            <input
              id="mesto-input"
              className="popup__input popup__input_field_mesto"
              name="name"
              type="text"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="popup__error mesto-input-error"></span>
            <input
              id="link-input"
              className="popup__input popup__input_field_link"
              name="link"
              type="url"
              placeholder="Ссылка на картинку"
              required
            />
            <p className="popup__error link-input-error"></p>
          </fieldset>
        </PopupWithForm>
        <PopupWithForm
          title="Вы уверены?"
          buttonText="Да"
          onClose={closeAllPopups}
        ></PopupWithForm>
      </div>
      <ImagePopup
      card={selectedCard} 
      onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
