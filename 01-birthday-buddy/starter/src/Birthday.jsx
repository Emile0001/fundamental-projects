export const Birthday = ({ name, age, image }) => {
    return (
        <article className="person">
            <img src={image} />
            <h4>{name}</h4>
            <p>{age}</p>
        </article>
    );
};
