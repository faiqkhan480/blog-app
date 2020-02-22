const data = {
    data: [],
    details: {},
    loading: true,
    key: true,
};

export default (state = data, action) => {
    switch (action.type) {
        case 'POSTS':
            return {
                ...state,
                data: action.payload,
                loading: false,
            };
        case 'DETAILS':
            return {
                ...state,
                details: action.payload,
                loading: false,
                key: false,
            };

        case 'UPDATE':
            const upadated = state.data.map(post => {
                    if(post.id !== action.payload.id) {
                        return post;
                    }
                    return {...state.data, ...action.payload}
                });
            return {
                ...state,
                post: upadated,
                key: true,
            };

        case 'CREATE':
            return {
                ...state,
                data: [action.payload, ...state.data],
                key: false,
            };

        default:
            return state;
    }
};