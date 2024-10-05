import { Tour } from "./Tour";

export const Tours = ({ tours, removeTour, readMore, setReadMore }) => {
    return (
        <section>
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
