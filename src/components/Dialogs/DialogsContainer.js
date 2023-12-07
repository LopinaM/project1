import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './Message/MessageItem';
import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

function DialogsContainer(props) {

    debugger;
    let state = props.store.getState().dialogsPage;

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    return (<Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
        dialogs={state}
    />)
}

export default DialogsContainer;