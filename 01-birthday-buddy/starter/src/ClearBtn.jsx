export const ClearBtn = ({ setBirthdays }) => {
    const clearBirthdays = () => {
        setBirthdays([]);
    };
    return (
        <button
            type="button"
            className="btn btn-block"
            onClick={clearBirthdays}
        >
            Clear All
        </button>
    );
};
