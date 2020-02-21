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
                // ...state,
                details: action.payload,
                key: false,
            };

        case 'UPDATE':
            const updatedList = state.data.map((post) => {
                if(post.id === action.payload.id){
                    console.log(action.payload, 'console post map=-=-=-');
                    return action.payload;
                }
                return post
            });
            return {
                // ...state,
                post: updatedList,
                // loading: true,
            };

        case 'CREATE':
            console.log(action.payload, 'action.payload');
            return {
                ...state,
                data: [action.payload, ...state.data],
                key: false,
            };

        default:
            return state;
    }
};