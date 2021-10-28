import React from 'react';
import Footer from './Footer';
// import PopupWithForm from './PopupWithForm';
import { api } from '../utils/Api';

// function Main({onEditProfile, onAddPlace, onEditAvatar}) {
function Main(props) {
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setAvatar] = React.useState();

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()]).then((data) => {
            setAvatar(data[0].avatar);
            setUserName(data[0].name);
            setUserDescription(data[0].about);
            // setCards(data[1]);
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

            <section className="cards">
            </section>

            <Footer />

        </main>




        </>
    );
}

export default Main;
