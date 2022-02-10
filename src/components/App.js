import React from "react";
import {api} from "../utils/Api";
import {CurrentUserContext} from "../context/CurrentUserContext";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''});
  const [currentUser, setCurrentUser] = React.useState({name: '', about: ''});

  React.useEffect(() => {
    api
        .getUserInfo()
        .then((res) => {
          setCurrentUser(res);
        })
        .catch((err) => console.log(err));
  }, []);


  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleUpdateUser({name, about}) {
    api
        .setUserInfo({name, about})
        .then((res) => {
          setCurrentUser(res);
          closeAllPopups();
        })
        .catch((err) => console.log(err));
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({name: '', link: ''});
  }


  return (
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <div className="content">
            <Header />
            <Main onEditProfile={handleEditProfileClick}
                  onEditAvatar={handleEditAvatarClick}
                  onAddPlace={handleAddPlaceClick}
                  onCardClick={handleCardClick} />
            <Footer />

            <EditProfilePopup isOpen={isEditProfilePopupOpen}
                              onClose={closeAllPopups}
                              onUpdateUser={handleUpdateUser} />

            <PopupWithForm name="add-card"
                           title="Новое место"
                           buttonText="Создать"
                           isOpen={isAddPlacePopupOpen}
                           onClose={closeAllPopups}>
              <input className="popup__text popup__text_input_name-place"
                     type="text"
                     name="AddNamePlace"
                     placeholder="Название"
                     minLength="2" maxLength="30"
                     required />
              <span className="popup__form-error new-place-error">Вы пропустили это поле.</span>
              <input className="popup__text popup__text_input_link"
                     type="url"
                     name="AddLinkPlace"
                     placeholder="Ссылка на картинку"
                     required />
              <span className="popup__form-error new-link-error">Введите адрес сайта.</span>
            </PopupWithForm>

            <PopupWithForm name="change-avatar"
                           title="Обновить аватар?"
                           buttonText="Сохранить"
                           isOpen={isEditAvatarPopupOpen}
                           onClose={closeAllPopups}>
              <input className="popup__text link-avatar"
                     type="url"
                     name="EditAvatar"
                     placeholder="Ссылка на картинку"
                     required />
              <span className="popup__form-error link-avatar-error">Введите адрес сайта.</span>
            </PopupWithForm>

            <PopupWithForm name="popup_confirm"
                           title="Вы уверены?"
                           buttonText="Да"
                           // isOpen={}
                           onClose={closeAllPopups}>
            </PopupWithForm>

            <ImagePopup card={selectedCard}
                        onClose={closeAllPopups} />

          </div>
        </div>
      </CurrentUserContext.Provider>
  );
}

export default App;
