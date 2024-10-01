import { useEffect, useState } from "react";

const url = "https://www.course-api.com/react-tours-project";

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [tours, setTours] = useState([]);

    useEffect(() => {
        const fetchTours = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    setIsLoading(false);
                    setIsError(true);
                }
                const tours = await response.json();
                setTours(tours);
                console.log(tours);
            } catch (error) {
                setIsError(true);
                console.log(error);
            }
        };
        fetchTours();
    }, []);

    return (
        <section>
            <ul>
                {tours.map((tour) => {
                    const { id, name, info, image, price } = tour;
                    return (
                        <li key={id}>
                            <img src={image} />
                            <h4>{name}</h4>
                            <p>{info}</p>
                            <p>{price}</p>
                            <button type="button" className="btn">
                                Not interested
                            </button>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};
export default App;
