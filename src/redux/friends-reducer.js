let initialState = {
    friendsData: [
        { id: 1, name: 'Sasha' },
        { id: 2, name: 'Kristina' },
        { id: 3, name: 'Annya' },
        { id: 4, name: 'Petya' },
        { id: 5, name: 'Artur' }
    ]
}

const friendsReducer = (state = initialState, action) => {
    return state;
}

export default friendsReducer;