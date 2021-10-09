import React from 'react';
import {PopupWithFormTest} from "./PopupWithFormTest";

export const PopupEditProfile = ({isOpen, handleEditProfile}) => {



    return isOpen ?
        <PopupWithFormTest handleCloseForm={handleEditProfile}>
                        <input className="popup__text popup__text_input_name" id="profile-name"
                               type="text"
                               name="EditName"
                               placeholder="Имя"
                               minLength="2" maxLength="40"
                               required/>
                        <span className="popup__form-error profile-name-error" id="profile-name-error">Вы пропустили это поле.</span>
                        <input className="popup__text popup__text_input_info" id="profile-info"
                               type="text"
                               name="EditInfo"
                               placeholder="О себе"
                               minLength="2" maxLength="200"
                               required/>
                        <span className="popup__form-error profile-info-error" id="profile-info-error">Вы пропустили это поле.</span>
        </PopupWithFormTest>
        : null
}
