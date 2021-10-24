import React from 'react';
import Header from './Header';
import Main from "./Main";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  // const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  // function handleDeleteCardClick() {
  //     setIsConfirmPopupOpen(true);
  // }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    // setIsPopupConfirmOpen(false);
  }



  return (
      <div className="page">
        <div className="content">
          <Header />
          <Main
              onEditProfile={handleEditProfileClick}
              onEditAvatar={handleEditAvatarClick}
              onAddPlace={handleAddPlaceClick}
              // onCardClick={handleCardClick}
          />

          <PopupWithForm name=""
                         title="Редактировать профиль"
                         buttonText="Сохранить"
                         isOpen={isEditProfilePopupOpen}
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
                         isOpen={isAddPlacePopupOpen}
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

          <PopupWithForm name="change-avatar"
                         title="Обновить аватар?"
                         buttonText="Сохранить"
                         isOpen={isEditAvatarPopupOpen}
                         onClose={closeAllPopups}
          >
            <input className="popup__text link-avatar" id="link-avatar"
                   type="url"
                   name="EditAvatar"
                   placeholder="Ссылка на картинку"
                   required
            />
            <span className="popup__form-error link-avatar-error" id="link-avatar-error">Введите адрес сайта.</span>
          </PopupWithForm>

          <PopupWithForm name="popup_confirm"
                         title="Вы уверены?"
                         buttonText="Да"
                         // isOpen={isConfirmPopupOpen}
                         onClose={closeAllPopups}
          >
          </PopupWithForm>

          <ImagePopup />

          {/*Шаблон карточки*/}
          <template id="newcard" className="card-template_type_default">
            <article className="card">
              <div className="card__photo-box">
                <img className="card__photo" alt="Фотография" />
              </div>
              <div className="card__name">
                <h2 className="card__text" />
                <div className="card__like-container">
                  <button className="card__button-like" type="button" />
                  <p className="card__counter-like">0</p>
                </div>
              </div>
              <button className="card__button-delete" type="button" />
            </article>
          </template>
        </div>
      </div>
  );
}

export default App;
