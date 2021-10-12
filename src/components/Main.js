import React from 'react';
import Footer from "./Footer";

// function Main({handleEditProfile}) {
function Main() {
    function handleEditAvatarClick() {
        // handleEditAvatar(true);
        document.querySelector('.popup_change-avatar').classList.add('popup_opened');
    }

    function handleEditProfileClick() {
        // console.log("внутри handleEditAvatarClick");
        // editProfileFormValidator.clearErrors();
        // editProfileFormValidator.toggleButtonState();
        // const userData = user.getUserInfo();
        // // Взять данные со страницы
        // inputProfileName.value = userData.name;
        // inputProfileInfo.value = userData.about;
        // popupClassEditProfile.open();

        // handleEditProfile(true);
        document.querySelector('.popup').classList.add('popup_opened');
    }

    function handleAddPlaceClick() {
        // handleAddPlace(true);
        document.querySelector('.popup_add-card').classList.add('popup_opened');
    }
    
    function closeAllPopups() {
        document.querySelector('.popup_change-avatar').classList.remove('popup_opened');
        document.querySelector('.popup').classList.remove('popup_opened');
        document.querySelector('.popup_add-card').classList.remove('popup_opened');
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

        <div className="popup">
            <div className="popup__container">
                <button className="popup__button-close" type="button" onClick={closeAllPopups}/>
                <div className="popup__content">
                    <h2 className="popup__title">Редактировать профиль</h2>
                    <form className="popup__form" name="SubmitEditProfile" noValidate>
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
                        <button className="popup__button-save" type="submit">Сохранить</button>
                    </form>
                </div>
            </div>
        </div>

        <div className="popup popup_add-card">
            <div className="popup__container">
                <button className="popup__button-close popup__button-close_add-card" type="button" onClick={closeAllPopups} />
                <div className="popup__content">
                    <h2 className="popup__title">Новое место</h2>
                    <form className="popup__form popup__form_add" name="SubmitAddPlace" noValidate>
                        <input className="popup__text popup__text_input_name-place" id="new-place"
                               type="text"
                               name="AddNamePlace"
                               placeholder="Название"
                               minLength="2" maxLength="30"
                               required />
                        <span className="popup__form-error new-place-error" id="new-place-error">Вы пропустили это поле.</span>
                        <input className="popup__text popup__text_input_link" id="new-link"
                               type="url"
                               name="AddLinkPlace"
                               placeholder="Ссылка на картинку"
                               required />
                        <span className="popup__form-error new-link-error" id="new-link-error">Введите адрес сайта.</span>
                        <button className="popup__button-save" type="submit">Создать</button>
                    </form>
                </div>
            </div>
        </div>

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
