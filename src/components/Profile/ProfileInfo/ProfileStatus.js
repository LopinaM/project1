import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import React, { useState } from 'react';

const ProfileStatus = (props) => {
    const [moodEdit, setMoodEdit] = useState(false);

    const editStatus = () => {
        setMoodEdit(!moodEdit);
    };

    return (
        <div>
            {moodEdit ? (
                <div>
                    <input autoFocus onBlur={editStatus} value={props.status} />
                </div>
            ) : (
                <div>
                    <span onDoubleClick={editStatus}>{props.status}</span>
                </div>)}
        </div>
    );
};


export default ProfileStatus;

