// function PopupWithForm(props) {

function PopupWithForm(props) {
    return (
//      <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}\`}>

        <div className={`popup popup_type_${props.name}`}>
            <div className="popup__container">
                <button className="popup__button-close" type="button" />
                <div className="popup__content">
                    <h2 className="popup__title">Редактировать профиль</h2>
                    <form className="popup__form" name="SubmitEditProfile" noValidate>

                        {props.children}

                        <button className="popup__button-save" type="submit">Сохранить</button>
                    </form>
                </div>
            </div>
        </div>
);
}

export default PopupWithForm;
