import React from 'react';
import avatarPath from '../images/avatar.jpg';
import App from './App';
import Card from './Card';
import apiConnect from '../utils/Api';

function Main({onEditProfil, onEditAvatar, onAddPlace, onCardClick}) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);
  
  React.useEffect(() =>{
    Promise.all([apiConnect.getProfileInfo(), apiConnect.getInitialCards()])
  .then(([response, card]) => {
      setUserName(response.name);
      setUserDescription(response.about);
      setUserAvatar(response.avatar);
      setCards(card);
    })
    .catch(err => console.log(err));
  })

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <button
            className="profile__avatar-button"
            type="button" onClick={onEditAvatar}
          >
            <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})`, objectFit: "contain" }} ></div>
            {/* <img
              src={avatarPath}
              alt="Аватар пользователя"
              className="profile__avatar"
            /> */}
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
