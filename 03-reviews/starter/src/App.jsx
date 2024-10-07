import { useState } from "react";
import people from "./data";
import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
const App = () => {
    const [index, setIndex] = useState(0);
    const { id, name, job, image, text } = people[index];

    const checkNumber = (number) => {
        if (number > people.length - 1) {
            return 0;
        }
        if (number < 0) {
            return people.length - 1;
        }
        return number;
    };
    const nextPerson = () => {
        setIndex((currentIndex) => {
            const newIndex = currentIndex + 1;
            return checkNumber(newIndex);
        });
    };
    const prevPerson = () => {
        setIndex((currentIndex) => {
            const newIndex = currentIndex - 1;
            return checkNumber(newIndex);
        });
    };
    const randomPerson = () => {
        let randomIndex = Math.floor(Math.random() * people.length);
        if (randomIndex === index) {
            randomIndex = index + 1;
        }
        setIndex(checkNumber(randomIndex));
    };

    return (
        <main>
            <article>
                <div>
                    <img src={image} alt={name} />
                </div>
                <h4>{name}</h4>
                <p>{job}</p>
                <p>{text}</p>
            </article>
            <div>
                <button onClick={prevPerson}>
                    <FiChevronLeft />
                </button>
                <button onClick={nextPerson}>
                    <FiChevronRight />
                </button>
            </div>

            <button onClick={randomPerson}>Random</button>
        </main>
    );
};
export default App;
