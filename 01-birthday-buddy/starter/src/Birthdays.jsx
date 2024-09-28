import { Birthday } from "./Birthday";

export const Birthdays = ({ birthdays }) => {
    return (
        <>
            {birthdays.map((birthday) => {
                const { id } = birthday;
                return (
                    <div key={id}>
                        <Birthday {...birthday}></Birthday>
                    </div>
                );
            })}
        </>
    );
};
