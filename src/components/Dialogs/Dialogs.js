import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './Message/MessageItem';
import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../redux/dialogs-reducer';

function Dialogs(props) {

    let state = props.store.getState().dialogsPage;
    let dialogsElement = state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElement = state.messagesData.map(message => <MessageItem message={message.message} />);
    let newMessageBody = state.newMessageBody;

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        console.log(body)
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
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