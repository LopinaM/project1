import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './Message/MessageItem';
import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';

function Dialogs(props) {
    debugger;
    let dialogsElement = props.dialogs.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElement = props.dialogs.messagesData.map(message => <MessageItem message={message.message} />);
    let newMessageBody = props.dialogs.newMessageBody;

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        console.log(body)
        props.updateNewMessageBody(body);
    }

    let onSendMessageClick = () => {
        props.sendMessage();
    }


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