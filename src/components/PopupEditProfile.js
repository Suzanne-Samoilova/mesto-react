// import React from 'react';
//
// export const PopupEditProfile = ({isOpen}) => {
//
//     return isOpen ?
//             <div className="popup">
//                 <div className="popup__container">
//                     <button className="popup__button-close" type="button" />
//                     <div className="popup__content">
//                         <h2 className="popup__title">Редактировать профиль</h2>
//                         <form className="popup__form" name="SubmitEditProfile" noValidate>
//                             <input className="popup__text popup__text_input_name" id="profile-name"
//                                    type="text"
//                                    name="EditName"
//                                    placeholder="Имя"
//                                    minLength="2" maxLength="40"
//                                    required
//                             />
//                             <span className="popup__form-error profile-name-error" id="profile-name-error">Вы пропустили это поле.</span>
//                             <input className="popup__text popup__text_input_info" id="profile-info"
//                                    type="text"
//                                    name="EditInfo"
//                                    placeholder="О себе"
//                                    minLength="2" maxLength="200"
//                                    required
//                             />
//                             <span className="popup__form-error profile-info-error" id="profile-info-error">Вы пропустили это поле.</span>
//                             <button className="popup__button-save" type="submit">Сохранить</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         : null
// }
