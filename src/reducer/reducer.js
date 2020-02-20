const data = {
    post: [],
    details: {},
};

export default (state = data, action) => {
    switch (action.type) {
        case 'POSTS':
            return {
                ...state,
                post: action.payload,
            };
        case 'DETAILS':
            return {
                ...state,
                details: action.payload,
            };

        default:
            return state;
    }
};