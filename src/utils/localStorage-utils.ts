export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('initialState');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};