import { useEffect, useState } from "react";
import { Loading } from "./components/Loading";
import { Error } from "./components/Error";
import { Tours } from "./components/Tours";

const url = "https://www.course-api.com/react-tours-project";

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [tours, setTours] = useState([]);

    const removeTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
    };

    const fetchTours = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(url);
            if (!response.ok) {
                setIsLoading(false);
                setIsError(true);
                return;
            }
            const tours = await response.json();
            setTours(tours);
            console.log(tours);
        } catch (error) {
            setIsError(true);
            console.log(error);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        fetchTours();
    }, []);

    if (isLoading) {
        return (
            <main>
                <Loading></Loading>;
            </main>
        );
    }
    if (isError) {
        return (
            <main>
                <Error></Error>;
            </main>
        );
    }
    return (
        <main>
            <Tours tours={tours} removeTour={removeTour}></Tours>
        </main>
    );
};
export default App;
