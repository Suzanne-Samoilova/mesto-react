function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <li id="newcard" className="card-template_type_default">
            <article className="card">
                <div className="card__photo-box">
                    <img className="card__photo"
                         src={props.card.link}
                         alt={props.card.name}
                         onClick={handleClick}
                    />
                </div>
                <div className="card__name">
                    <h2 className="card__text">
                        {props.card.name}</h2>
                    <div className="card__like-container">
                        <button className="card__button-like" type="button"
                        />
                        <p className="card__counter-like">
                            {props.card.likes.length.toString()}
                        </p>
                    </div>
                </div>
                <button className="card__button-delete" type="button"
                />
            </article>
        </li>
    )
}

export default Card;