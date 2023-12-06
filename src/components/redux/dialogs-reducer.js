const UPDATE_NEW_MESSSAGE_BODY = 'UPDATE_NEW_MESSSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.messagesData.push({ id: 4, message: body });
            state.newMessageBody = '';
            return state;
        default:
            return state;

    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSSAGE_BODY, body: body })

export default dialogsReducer;