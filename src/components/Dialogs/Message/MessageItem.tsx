import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

type PropsType = {
  message: string;
};

let MessageItem: React.FC<PropsType> = (props) => {
  return <div className={s.dialog}> {props.message}</div>;
};

export default MessageItem;
