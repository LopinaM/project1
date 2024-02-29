import { DialogType, MessageType } from "../types/types";

const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  dialogsData: [
    { id: 1, name: "Sasha" },
    { id: 2, name: "Kristina" },
    { id: 3, name: "Annya" },
  ] as Array<DialogType>,
  messagesData: [
    { id: 1, message: "Hi, how are you?" },
    { id: 2, message: "Fine" },
    { id: 3, message: "How are you?" },
  ] as Array<MessageType>,
};

export type InitialStateType = typeof initialState;

const dialogsReducer = (
  state = initialState,
  action: any
): InitialStateType => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 4, message: body }],
      };
    default:
      return state;
  }
};

type SendMessageCreatorActionType = {
  type: typeof SEND_MESSAGE;
  newMessageBody: string;
};
export const sendMessageCreator = (
  newMessageBody: string
): SendMessageCreatorActionType => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
