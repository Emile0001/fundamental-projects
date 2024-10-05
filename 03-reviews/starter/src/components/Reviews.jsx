import reviews from "../data";
import { Review } from "./Review";

export const Reviews = () => {
    return (
        <section>
            {reviews.map((review) => {
                return <Review review={review} key={review.id} />;
            })}
        </section>
    );
};
