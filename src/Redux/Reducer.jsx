

var initialData = {
    counter: 0,
};

const Reducer = (storeData = initialData, action) => {
    if(action.type === 'counter') {
        return {
            count: action.count
        }
    };
    return storeData;
}

export default Reducer;