// import FormValidator from './FormValidator';
// import {config} from './constants';
// import UserInfo from './UserInfo';
// import PopupWithForm from './PopupWithForm';
// import Api from './Api';

// // Экземпляры класса FormValidator
// export const editProfileFormValidator = new FormValidator(config, document.querySelector('.popup').querySelector('.popup__form'));
// export const addNewPlaceFormValidator = new FormValidator(config, document.querySelector('.popup_add-card').querySelector('.popup__form'));
// export const editAvatarFormValidator = new FormValidator(config, document.querySelector('.popup_change-avatar').querySelector('.popup__form'));
//
// // Вызов валидации
// editProfileFormValidator.enableValidation();
// addNewPlaceFormValidator.enableValidation();
// editAvatarFormValidator.enableValidation();

// export const user = new UserInfo({ profileNameElement, profileInfoElement, profileAvatar });

// export const api = new Api({
//     baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-27',
//     headers: {
//         authorization: '2ad13860-f9cc-4265-9332-9990cf978091',
//         'Content-Type': 'application/json'
//     }
// });

// // Попап Редактировать профиль
// export const popupClassEditProfile = new PopupWithForm({
//     popupSelector: '.popup',
//     handleFormSubmit: (data) => {
//         popupClassEditProfile.loading(true, 'Загрузка...');
//         api.setUserInfo(data)
//             .then((res) => {
//                 // user.setUserInfo(res);
//                 popupClassEditProfile.close();
//             })
//             .catch((err) => {
//                 console.log(err);
//             })
//             .finally(() => {
//                 popupClassEditProfile.loading(false);
//             })
//     }
// });