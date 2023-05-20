import React from 'react';

function Card({card, onCardClick}) {

    function handleCardClick(){
        onCardClick(card)
    }
  return (
    <article className="element">
                        <button className="element__deleteButton" type="button"></button>
                        <img src={card.link} alt={card.name} onClick ={handleCardClick} className="element__img"/>
                        <div className="description">
                            <h2 className="description__name">{card.name}</h2>
                            <div className="description__like-container">
                                <button className="description__like" type="button"></button>
                                <p className="description__like-counter">{card.likes.length}</p>
                            </div>
                        </div>
                    </article>

  );
}

export default Card;