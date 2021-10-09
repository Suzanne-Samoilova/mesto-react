import React from 'react';
import Footer from "./Footer";
// import {editProfileFormValidator, popupClassEditProfile, user} from "../utils/utils";
// import {inputProfileInfo, inputProfileName} from "../utils/constants";

function Main({handleEditProfile}) {
    function handleEditAvatarClick() {
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

        console.log('Edit');
        handleEditProfile(true);
    }

    function handleAddPlaceClick() {
        console.log('Add');
    }

    return (
        <main>
            <section className="profile">
                <div className="profile__box">
                    <div className="profile__avatar-edit" onClick={handleEditAvatarClick}>
                        <img className="profile__image" alt="Изображение профиля" />
                    </div>
                    <div className="profile__info">
                        <div className="profile__name-box">
                            <h1 className="profile__name">jhghgjh</h1>
                            <button className="profile__button-edit" type="button" onClick={handleEditProfileClick} />
                        </div>
                        <p className="profile__text">jhghgjh</p>
                    </div>
                </div>
                <button className="profile__button-add" type="button" onClick={handleAddPlaceClick} />
            </section>

            <section className="cards">
            </section>

            <Footer />

        </main>
    );
}

export default Main;
