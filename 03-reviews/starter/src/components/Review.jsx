export const Review = ({ review }) => {
    const { id, name, job, image, text } = review;
    return (
        <section>
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <h5>{job}</h5>
            <p>{text}</p>
        </section>
    );
};
