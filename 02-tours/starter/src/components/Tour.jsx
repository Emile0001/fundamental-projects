export const Tour = ({
    id,
    image,
    name,
    price,
    info,
    removeTour,
    readMore,
    setReadMore,
}) => {
    return (
        <section>
            <img src={image} alt={name} />
            <span>{price}</span>
            <h4>{name}</h4>
            <p>
                {readMore ? info : `${info.substring(0, 200)}...`}
                <button type="button" onClick={() => setReadMore(!readMore)}>
                    {readMore ? "show less" : "read more"}
                </button>
            </p>
            <button
                type="button"
                onClick={() => {
                    removeTour(id);
                }}
            >
                not interested
            </button>
        </section>
    );
};
