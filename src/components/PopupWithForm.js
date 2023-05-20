import React from 'react';
import App from './App';
function PopupWithForm({name, isOpen, title, buttonText, onClose, children}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen && "popup_open"}`}>
      <div className={`popup__container popup__container_${name}`}>
        <h3 className="popup__title">{title}</h3>
        <button className="popup__close" type="button" onClick={onClose}></button>
        <form className="popup__form" name={`form-popup-${name}`}
>
         {children}
          <button className="popup__button" type="submit" value="Сохранить">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
