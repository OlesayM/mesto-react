import React, { useState, useEffect } from 'react'
import Card from './Card';
import apiConnect from '../utils/Api';

function Main({onEditProfil, onEditAvatar, onAddPlace, onCardClick}) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);
  
  useEffect(() =>{
    Promise.all([apiConnect.getProfileInfo(), apiConnect.getInitialCards()])
  .then(([response, card]) => {
      setUserName(response.name);
      setUserDescription(response.about);
      setUserAvatar(response.avatar);
      setCards(card);
    })
    .catch(err => console.log(err));
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <button
            className="profile__avatar-button"
            type="button" onClick={onEditAvatar}
          >
            <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})`, objectFit: "contain" }} ></div>
          </button>
          <div className="profile__info">
            <div className="user-field">
              <h1 className="profile__username">{userName}</h1>
              <button
                className="profile__editbutton"
                type="button" onClick={onEditProfil}
              ></button>
            </div>
            <p className="profile__occupation">{userDescription}</p>
          </div>
        </div>
        <button
          className="profile__addbutton"
          type="button" onClick={onAddPlace}
        ></button>
      </section>
      <section className="elements">
        {cards.map((card)=> (<Card card ={card} key={card._id} onCardClick={onCardClick}/>))}
      </section>
    </main>
  );
}

export default Main;
