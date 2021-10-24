import React from 'react';
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";

// function Main({onEditProfile, onAddPlace, onEditAvatar}) {
function Main(props) {

    return (
        <>
        <main>
            <section className="profile">
                <div className="profile__box">
                    <div className="profile__avatar-edit"
                         aria-label="Изменить аватар"
                         onClick={props.onEditAvatar}
                    >
                        <img className="profile__image" alt="Изображение профиля" />
                    </div>
                    <div className="profile__info">
                        <div className="profile__name-box">
                            <h1 className="profile__name">Жак-Ив Кусто</h1>
                            <button className="profile__button-edit"
                                    type="button"
                                    aria-label="Изменить профиль"
                                    onClick={props.onEditProfile}
                            />
                        </div>
                        <p className="profile__text">Исследователь океана</p>
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
