const UPDATE_NEW_MESSSAGE_BODY = 'UPDATE_NEW_MESSSAGE_BODY';
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
    ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData, { id: 4, message: body }]

            }
        default:
            return state;

    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSSAGE_BODY, body: body })

export default dialogsReducer;