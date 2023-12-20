import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './Message/MessageItem';
import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';

import { Field, reduxForm } from "redux-form";
import AddMessageForm from './AddMessageForm/AddMessageForm';

function Dialogs(props) {

    let dialogsElement = props.dialogs.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
    let messagesElement = props.dialogs.messagesData.map(message => <MessageItem message={message.message} key={message.id} />);
    let newMessageBody = props.dialogs.newMessageBody;


    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
                <AddMessageForm onSubmit={addNewMessage} />
            </div>
        </div>
    )
}

// const AddMessageForm = (props) => {
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 <Field component="textarea" name="newMessageBody" placeholder='Enter your message' />
//             </div>
//             <div>
//                 <button >Send</button>
//             </div>
//         </form>

//     )
// }

// const AddMessageFormRedax = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm);

export default Dialogs;