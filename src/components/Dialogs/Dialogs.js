import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './Message/MessageItem';
import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import { Redirect } from 'react-router-dom';
import { Navigate } from "react-router-dom";

function Dialogs(props) {

    let dialogsElement = props.dialogs.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
    let messagesElement = props.dialogs.messagesData.map(message => <MessageItem message={message.message} key={message.id} />);
    let newMessageBody = props.dialogs.newMessageBody;

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        console.log(body)
        props.updateNewMessageBody(body);
    }

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    // if (!props.isAuth) return <Navigate to="/login" replace={true} />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
                {/* <div className={`${s.dialog} ${s.active}`}>
                    <NavLink to="/dialogs/2">Kristina</NavLink>
                </div> */}
            </div>
            <div className={s.messages}>
                {messagesElement}
                <textarea onChange={onNewMessageChange} value={newMessageBody} placeholder='Enter your message'></textarea>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;