import { useState } from "react";
import { Reviews } from "./components/Reviews";

const App = () => {
    const [reviews, setReviews] = useState();
    return (
        <main>
            <h1>Reviews</h1>
            <Reviews />
        </main>
    );
};
export default App;
