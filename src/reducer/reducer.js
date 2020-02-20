const data = {
    post: [],
};

export default (state = data, action) => {
    switch (action.type) {
        case 'POSTS':
            return {
                post: action.payload,
            };

        default:
            return state;
    }
};