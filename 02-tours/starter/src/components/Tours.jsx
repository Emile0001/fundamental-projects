import { Tour } from "./Tour";

export const Tours = ({ tours, removeTour, readMore, setReadMore }) => {
    return (
        <section>
            <h1>{tours.length} Tours</h1>
            {tours.map((tour) => {
                return (
                    <Tour
                        key={tour.id}
                        {...tour}
                        removeTour={removeTour}
                        readMore={readMore}
                        setReadMore={setReadMore}
                    />
                );
            })}
        </section>
    );
};
