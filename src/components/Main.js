import React from 'react';
import Card from './Card';
import {CurrentUserContext} from "../context/CurrentUserContext";

function Main(props) {
    const currentUser = React.useContext(CurrentUserContext);

    // карточка
    // const [cards, setCards] = React.useState([]);


    return (
        <main>
            <section className="profile">
                <div className="profile__box">
                    <div className="profile__avatar-edit"
                         aria-label="Изменить аватар"
                         onClick={props.onEditAvatar}>
                        <img className="profile__image"
                             src={currentUser?.avatar}
                             alt="Изображение профиля" />
                    </div>
                    <div className="profile__info">
                        <div className="profile__name-box">
                            <h1 className="profile__name">
                                {currentUser?.name}
                            </h1>
                            <button className="profile__button-edit"
                                    aria-label="Изменить данные профиля"
                                    type="button"
                                    onClick={props.onEditProfile} />
                        </div>
                        <p className="profile__text">
                            {currentUser?.about}
                        </p>
                    </div>
                </div>
                <button className="profile__button-add"
                        aria-label="Добавить место"
                        type="button"
                        onClick={props.onAddPlace} />
            </section>

            <ul className="cards">
                {props.cards.map((card) => (
                    <Card
                        onCardClick={props.onCardClick}
                        onCardDelete={props.onCardDelete}
                        onCardLike={props.onCardLike}
                        card={card}
                        key={card._id} />
                ))}
            </ul>
        </main>
    );
}

export default Main;
