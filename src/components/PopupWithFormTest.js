import React from 'react';

export const PopupWithFormTest = ({handleCloseForm, children}) => {
    function handleClosePopupEditProfile() {
        handleCloseForm(false)
    }

    return      <div className="popup">
                    <div className="popup__container">
                        <button className="popup__button-close" type="button" onClick={handleClosePopupEditProfile} />
                        <div className="popup__content">
                            <h2 className="popup__title">Редактировать профиль</h2>
                            <form className="popup__form" name="SubmitEditProfile" noValidate>
                                {children}

                                <button className="popup__button-save" type="submit">Сохранить</button>
                            </form>
                        </div>
                    </div>
                </div>
}
