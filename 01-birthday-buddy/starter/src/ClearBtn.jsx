export const ClearBtn = ({ setBirthdays }) => {
    const clearBirthdays = () => {
        setBirthdays([]);
    };
    return (
        <button type="button" className="btn" onClick={clearBirthdays}>
            Clear All
        </button>
    );
};
