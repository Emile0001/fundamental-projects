export const Tour = ({ id, name, image, info, price, removeTour }) => {
    return (
        <article className="single-tour">
            <img src={image} alt={name} className="img" />
            <span className="tour-price">${price}</span>
            <div className="tour-info">
                <h5>{name}</h5>
                <p>
                    {info}
                    <button className="info-btn">read more</button>
                </p>
                <button
                    type="button"
                    className="btn btn-block delete-btn"
                    onClick={() => removeTour(id)}
                >
                    not interested
                </button>
            </div>
        </article>
    );
};
