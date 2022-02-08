import React from "react";
import {CurrentUserContext} from "../context/CurrentUserContext";


function Card(props) {
    const currentUser = React.useContext(CurrentUserContext);

    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = props.card.owner._id === currentUser._id;

    // Создаём переменную, которую после зададим в `className` для кнопки удаления
    const cardDeleteButtonClassName = `card__button-delete ${
            isOwn ? 'card__button-delete_visible' : ''}`;


    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = props.card.likes.some((i) => i._id === currentUser._id);

    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = `card__button-like ${
        isLiked ? "card__button-like_active" : ""
    }`;


    function handleClick() {
        props.onCardClick(props.card);
    }


    return (
        <article className="card">
            <div className="card__photo-box">
                <img className="card__photo"
                     src={props.card.link}
                     alt={props.card.name}
                     onClick={handleClick}
                />
            </div>
            <div className="card__name">
                <h2 className="card__text">
                    {props.card.name}</h2>
                <div className="card__like-container">
                    <button className={cardLikeButtonClassName}
                            aria-label="Лайк"
                            type="button" />
                    <p className="card__counter-like">
                        {props.card.likes.length}
                    </p>
                </div>
            </div>
            <button className={cardDeleteButtonClassName}
                    aria-label="Удалить карточку"
                    type="button"
                    // onClick={props.onConfirm}
            />
        </article>
    )
}

export default Card;
