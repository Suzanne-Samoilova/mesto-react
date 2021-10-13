function ImagePopup() {
    return (
        <div className="popup popup_expand">
            <div className="popup__container-expand">
                <img className="popup__img-expand" alt="Изображение" src="#" />
                    <h2 className="popup__name-expand" />
                    <button className="popup__button-close popup__button-close-expand" type="button" />
            </div>
        </div>
    );
}

export default ImagePopup;