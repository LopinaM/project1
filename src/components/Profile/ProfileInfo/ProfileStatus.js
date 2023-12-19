import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import React, { useEffect, useState } from 'react';

const ProfileStatus = (props) => {
    const [moodEdit, setMoodEdit] = useState(false);
    const [status, setStatus] = useState(props.status);

    const editStatus = () => {
        setMoodEdit(!moodEdit);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    //?
    useEffect(() => {

        if (!status) {
            setStatus(status);
        }
        // console.log("componentDidUpdate")
    });


    return (
        <div>
            {moodEdit
                ? (
                    <div>
                        <input onChange={onStatusChange} autoFocus onBlur={editStatus} value={status} />
                    </div>
                )
                : (
                    <div>
                        <span onDoubleClick={editStatus}>{status || "-------"}</span>
                    </div>
                )
            }
        </div>
    );

};

export default ProfileStatus;
