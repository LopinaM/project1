import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './Message/MessageItem';
import React from 'react';

function Dialogs(props) {

    let dialogsElement =
        props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElement =
        props.state.messagesData.map(message => <MessageItem message={message.message} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text)
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
                <textarea ref={newPostElement}></textarea>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;