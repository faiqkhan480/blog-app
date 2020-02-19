const data = {
    post: '',
};

export default (state = data, action) => {
    switch (action.type) {
        case 'POSTS':
            return {
                ...state
            };

        default:
            return state;
    }
};