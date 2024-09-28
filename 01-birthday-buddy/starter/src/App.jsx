import { useState } from "react";

import { Title } from "./Title";
import { ClearBtn } from "./ClearBtn";
import { Birthdays } from "./Birthdays";
import data from "./data";

const App = () => {
    const [birthdays, setBirthdays] = useState(data);

    return (
        <article className="container">
            <Title birthdays={birthdays.length}></Title>
            <Birthdays birthdays={birthdays}></Birthdays>
            <ClearBtn setBirthdays={setBirthdays}></ClearBtn>
        </article>
    );
};
export default App;
