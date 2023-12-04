import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

function DialogItem(props) {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

function MessageItem(props) {
    return (<div className={s.dialog}> {props.message}</div >)
}



function Dialogs(props) {
    let dialogsData = [
        { id: 1, name: 'Sasha' },
        { id: 2, name: 'Kristina' },
        { id: 3, name: 'Artur' }
    ]

    let messagesData = [
        { id: 1, message: 'Hi, how are you?' },
        { id: 2, message: 'Fine' },
        { id: 3, message: 'How are you?' }
    ]
    let dialogsElement = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElement = messagesData.map(message => <MessageItem message={message.message} />);

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
            </div>
        </div>
    )
}

export default Dialogs;