export const Birthday = ({ name, age, image }) => {
    return (
        <section className="person">
            <img src={image} className="img" />
            <div>
                <h4>{name}</h4>
                <p>{age}</p>
            </div>
        </section>
    );
};
