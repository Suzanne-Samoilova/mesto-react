import React from 'react';
import Header from './Header';
import Main from "./Main";
import {PopupEditProfile} from "./PopupEditProfile";

function App() {
  const [isOpenPopupProfileEdit, setIsOpenPopupProfileEdit] = React.useState(false);

  console.log(isOpenPopupProfileEdit);
  return (
      <div className="page">
        <div className="content">
          <Header />
          <Main handleEditProfile={setIsOpenPopupProfileEdit} />
          <PopupEditProfile
              isOpen={isOpenPopupProfileEdit}
              handleEditProfile={setIsOpenPopupProfileEdit} />


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
