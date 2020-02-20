const data = {
    post: [],
    details: []
};

export default (state = data, action) => {
    switch (action.type) {
        case 'POSTS':
            return {
                post: action.payload,
            };
        case 'DETAILS':
            return {
                details: action.payload
            };

        default:
            return state;
    }
};