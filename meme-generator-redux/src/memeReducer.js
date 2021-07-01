// set up an Initial State
const DEFAULT_STATE = {
    memes:[]
};

// create reducers
const memeReducer = (state = DEFAULT_STATE, action) => {
    const {type, payload} = action;

    switch(type) {
        case "add_meme":
            return {
                ...state, 
                memes: [
                    ...state.memes, payload
                ]
            }
        case "delete_meme":
            return {
                ...state,
                memes: state.memes.filter(meme => meme.id !== payload)
            }
        default: 
            return state;
    }
}

export default memeReducer;