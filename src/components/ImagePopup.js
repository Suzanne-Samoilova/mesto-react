function ImagePopup(props) {
    return (
        <div className={`popup popup_expand ${props.card ? 'popup_opened' : null}`}>
            <div className="popup__container-expand">
                <img className="popup__img-expand"
                     src={props.card?.link}
                     alt={props.card?.name}
                />
                <h2 className="popup__name-expand">
                    {props.card ? props.card.name : null}
                </h2>
                <button className="popup__button-close popup__button-close-expand"
                        aria-label="Закрыть попап"
                        type="button"
                        onClick={props.onClose}
                />
            </div>
        </div>
    );
}

export default ImagePopup;
