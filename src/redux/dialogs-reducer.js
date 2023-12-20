const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogsData: [
        { id: 1, name: 'Sasha' },
        { id: 2, name: 'Kristina' },
        { id: 3, name: 'Annya' }
    ],
    messagesData: [
        { id: 1, message: 'Hi, how are you?' },
        { id: 2, message: 'Fine' },
        { id: 3, message: 'How are you?' }
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 4, message: body }]

            }
        default:
            return state;

    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer;