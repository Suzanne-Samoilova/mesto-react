import React from 'react';
import Footer from './Footer';
import { api } from '../utils/Api';
// import Card from './Card';

function Main(props) {
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setAvatar] = React.useState();

    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()]).then((data) => {
            setUserName(data[0].name);
            setUserDescription(data[0].about);
            setAvatar(data[0].avatar);

            setCards(data[1].map(
                (card) =>
                    <li id="newcard" className="card-template_type_default">
                        <article className="card">
                            <div className="card__photo-box">
                                <img className="card__photo" alt="Фотография" src={card.link}
                                />
                            </div>
                            <div className="card__name">
                                <h2 className="card__text">{card.name}</h2>
                                <div className="card__like-container">
                                    <button className="card__button-like" type="button"
                                    />
                                    <p className="card__counter-like">
                                        {card.likes.length.toString()}
                                    </p>
                                </div>
                            </div>
                            <button className="card__button-delete" type="button"
                            />
                        </article>
                    </li>
            ));
        })
            .catch((err) => console.log(err))
    }, []);


    return (
        <>
        <main>
            <section className="profile">
                <div className="profile__box">
                    <div className="profile__avatar-edit"
                         aria-label="Изменить аватар"
                         onClick={props.onEditAvatar}
                    >
                        <img className="profile__image" src={userAvatar} alt="Изображение профиля" />
                    </div>
                    <div className="profile__info">
                        <div className="profile__name-box">
                            <h1 className="profile__name">{userName}</h1>
                            <button className="profile__button-edit"
                                    type="button"
                                    aria-label="Изменить профиль"
                                    onClick={props.onEditProfile}
                            />
                        </div>
                        <p className="profile__text">{userDescription}</p>
                    </div>
                </div>
                <button className="profile__button-add"
                        type="button"
                        aria-label="Добавить место"
                        onClick={props.onAddPlace}
                />
            </section>

            <ul className="cards">
                {cards}
            </ul>

            <Footer />

        </main>

        </>
    );
}

export default Main;
