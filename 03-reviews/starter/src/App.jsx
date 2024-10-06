import { useState } from "react";
import people from "./data";
const App = () => {
    const [index, setIndex] = useState(0);
    const { id, name, job, image, text } = people[index];

    return (
        <main>
            <section>
                <img src={image} alt={name} />
                <h4>{name}</h4>
                <p>{job}</p>
                <p>{text}</p>
            </section>
        </main>
    );
};
export default App;
