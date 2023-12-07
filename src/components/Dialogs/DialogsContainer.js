import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './Message/MessageItem';
import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../storeContext';

function DialogsContainer(props) {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsPage;

                    let onNewMessageChange = (body) => {
                        store.dispatch(updateNewMessageBodyCreator(body));
                    }

                    let onSendMessageClick = () => {
                        store.dispatch(sendMessageCreator());
                    }
                    return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
                        dialogs={state} />
                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;