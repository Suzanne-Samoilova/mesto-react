import React from 'react';
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";

// function Main({handleEditProfile}) {
function Main() {
    const [isPopupEditProfileOpen, setIsPopupEditProfileOpen] = React.useState(false);
    const [isPopupAddPlaceOpen, setIsPopupAddPlaceOpen] = React.useState(false);
    const [isPopupEditAvatarOpen, setIsPopupEditAvatarOpen] = React.useState(false);

    console.log(isPopupEditProfileOpen); //false

    function handleEditProfileClick() {
        setIsPopupEditProfileOpen(true);
    }

    function handleAddPlaceClick() {
        setIsPopupAddPlaceOpen(true);
    }

    function handleEditAvatarClick() {
        setIsPopupEditAvatarOpen(true);
    }
    
    function closeAllPopups() {
        setIsPopupEditProfileOpen(false);
        setIsPopupAddPlaceOpen(false);
        setIsPopupEditAvatarOpen(false);
    }

    return (
        <>
        <main>
            <section className="profile">
                <div className="profile__box">
                    <div className="profile__avatar-edit" onClick={handleEditAvatarClick}>
                        <img className="profile__image" alt="Изображение профиля" />
                    </div>
                    <div className="profile__info">
                        <div className="profile__name-box">
                            <h1 className="profile__name">Жак-Ив Кусто</h1>
                            <button className="profile__button-edit" type="button" onClick={handleEditProfileClick}/>
                        </div>
                        <p className="profile__text">Исследователь океана</p>
                    </div>
                </div>
                <button className="profile__button-add" type="button" onClick={handleAddPlaceClick} />
            </section>

            <section className="cards">
            </section>

            <Footer />

        </main>

            <PopupWithForm name=""
                           title="Редактировать профиль"
                           buttonText="Сохранить"
                           isOpen={isPopupEditProfileOpen}
                           onClose={closeAllPopups}
                >
                <input className="popup__text popup__text_input_name" id="profile-name"
                       type="text"
                       name="EditName"
                       placeholder="Имя"
                       minLength="2" maxLength="40"
                       required
                />
                <span className="popup__form-error profile-name-error" id="profile-name-error">Вы пропустили это поле.</span>
                <input className="popup__text popup__text_input_info" id="profile-info"
                       type="text"
                       name="EditInfo"
                       placeholder="О себе"
                       minLength="2" maxLength="200"
                       required
                />
                <span className="popup__form-error profile-info-error" id="profile-info-error">Вы пропустили это поле.</span>
            </PopupWithForm>



            <PopupWithForm name="add-card"
                           title="Новое место"
                           buttonText="Создать"
                           isOpen={isPopupAddPlaceOpen}
                           onClose={closeAllPopups}
            >
                <input className="popup__text popup__text_input_name-place" id="new-place"
                       type="text"
                       name="AddNamePlace"
                       placeholder="Название"
                       minLength="2" maxLength="30"
                       required
                />
                <span className="popup__form-error new-place-error" id="new-place-error">Вы пропустили это поле.</span>
                <input className="popup__text popup__text_input_link" id="new-link"
                       type="url"
                       name="AddLinkPlace"
                       placeholder="Ссылка на картинку"
                       required
                />
                <span className="popup__form-error new-link-error" id="new-link-error">Введите адрес сайта.</span>
            </PopupWithForm>

        {/*<div className="popup popup_add-card">*/}
        {/*    <div className="popup__container">*/}
        {/*        <button className="popup__button-close popup__button-close_add-card" type="button" onClick={closeAllPopups} />*/}
        {/*        <div className="popup__content">*/}
        {/*            <h2 className="popup__title">Новое место</h2>*/}
        {/*            <form className="popup__form popup__form_add" name="SubmitAddPlace" noValidate>*/}
        {/*                <input className="popup__text popup__text_input_name-place" id="new-place"*/}
        {/*                       type="text"*/}
        {/*                       name="AddNamePlace"*/}
        {/*                       placeholder="Название"*/}
        {/*                       minLength="2" maxLength="30"*/}
        {/*                       required />*/}
        {/*                <span className="popup__form-error new-place-error" id="new-place-error">Вы пропустили это поле.</span>*/}
        {/*                <input className="popup__text popup__text_input_link" id="new-link"*/}
        {/*                       type="url"*/}
        {/*                       name="AddLinkPlace"*/}
        {/*                       placeholder="Ссылка на картинку"*/}
        {/*                       required />*/}
        {/*                <span className="popup__form-error new-link-error" id="new-link-error">Введите адрес сайта.</span>*/}
        {/*                <button className="popup__button-save" type="submit">Создать</button>*/}
        {/*            </form>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}

            <div className="popup popup_change-avatar">
                <div className="popup__container">
                    <button className="popup__button-close" type="button" onClick={closeAllPopups} />
                    <div className="popup__content">
                        <h2 className="popup__title">Обновить аватар?</h2>
                        <form className="popup__form popup__form-avatar" name="" noValidate>
                            <input className="popup__text link-avatar" id="link-avatar"
                                   type="url"
                                   name="EditAvatar"
                                   placeholder="Ссылка на картинку"
                                   required />
                            <span className="popup__form-error link-avatar-error" id="link-avatar-error">Введите адрес сайта.</span>
                            <button className="popup__button-save" type="submit">Сохранить</button>
                        </form>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Main;
