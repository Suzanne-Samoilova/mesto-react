import React from "react";
import {api} from "../utils/Api";
import {CurrentUserContext} from "../context/CurrentUserContext";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";


function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [cards, setCards] = React.useState([]);
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


    React.useEffect(() => {
        api
            .getCardList()
            .then((data) => {
                setCards(data);
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

    function handleUpdateAvatar({avatar}) {
        api
            .setUserAvatar({avatar})
            .then((res) => {
                setCurrentUser(res);
                closeAllPopups();
            })
            .catch((err) => console.log(err));
    }

    function handleAddPlaceSubmit({name, link}) {
        api
            .postCard({name, link})
            .then((newCard) => {
                setCards([newCard, ...cards]);
                closeAllPopups();
            })
            .catch((err) => console.log(err));
    }

    function handleCardLike(card) {
        const isLiked = card.likes.some((i) => i._id === currentUser._id);
        api
            .changeLikeCardStatus(card._id, !isLiked)
            .then((newCard) => {
                setCards((state) =>
                    state.map((c) => c._id === card._id ? newCard : c));
            })
            .catch((err) => console.log(err));
    }

    function handleCardDelete(card) {
        api
            .deleteCard(card._id)
            .then(() => {
                setCards((state) =>
                    state.filter((c) => c._id !== card._id));
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
                          onCardClick={handleCardClick}
                          onCardLike={handleCardLike}
                          onCardDelete={handleCardDelete}
                          cards={cards} />

                    <Footer />

                    <EditProfilePopup isOpen={isEditProfilePopupOpen}
                                      onClose={closeAllPopups}
                                      onUpdateUser={handleUpdateUser} />

                    <EditAvatarPopup isOpen={isEditAvatarPopupOpen}
                                     onClose={closeAllPopups}
                                     onUpdateAvatar={handleUpdateAvatar} />

                    <AddPlacePopup isOpen={isAddPlacePopupOpen}
                                   onClose={closeAllPopups}
                                   onAddPlace={handleAddPlaceSubmit} />

                    <ImagePopup card={selectedCard}
                                onClose={closeAllPopups} />
                </div>
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
