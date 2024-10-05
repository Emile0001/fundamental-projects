import { useEffect, useState } from "react";
import { Tours } from "./components/Tours";
import { Tour } from "./components/Tour";

const url = "https://www.course-api.com/react-tours-project";

const App = () => {
    const [tours, setTours] = useState([]);
    const [readMore, setReadMore] = useState(false);

    const fetchTours = async () => {
        try {
            const responds = await fetch(url);
            const tours = await responds.json();
            setTours(tours);
            console.log(tours);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTours();
    }, []);

    const removeTour = (id) => {
        const filteredTours = tours.filter((tour) => tour.id !== id);
        setTours(filteredTours);
    };

    return (
        <main>
            <h1>Tours</h1>
            <Tours
                tours={tours}
                removeTour={removeTour}
                readMore={readMore}
                setReadMore={setReadMore}
            />
        </main>
    );
};
export default App;
