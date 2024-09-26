import { useState } from "react";

import { Title } from "./Title";
import { ClearBtn } from "./ClearBtn";
import { Birthdays } from "./Birthdays";

const App = () => {
    return (
        <article className="container">
            <Title></Title>
            <Birthdays></Birthdays>
            <ClearBtn></ClearBtn>
        </article>
    );
};
export default App;
