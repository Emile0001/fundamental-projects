import reviews from "./data";

const App = () => {
    return (
        <main>
            <h1>
                {reviews.filter((review) => {
                    review.id === 1;
                })}
            </h1>
        </main>
    );
};
export default App;
