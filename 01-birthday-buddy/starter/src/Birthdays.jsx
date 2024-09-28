import { Birthday } from "./Birthday";

export const Birthdays = ({ birthdays }) => {
    return (
        <section>
            {birthdays.map((birthday) => {
                const { id } = birthday;
                return (
                    <div key={id}>
                        <Birthday {...birthday}></Birthday>
                    </div>
                );
            })}
        </section>
    );
};
