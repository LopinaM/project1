import React, { useEffect, useState } from 'react';

const ProfileStatus = (props) => {
    const [moodEdit, setMoodEdit] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setMoodEdit(true);
    }

    const deactivateEditMode = () => {
        setMoodEdit(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    return (
        <div>
            {moodEdit
                ? (
                    <div>
                        <input onChange={onStatusChange} autoFocus onBlur={deactivateEditMode} value={status} />
                    </div>
                )
                : (
                    <div>
                        <b>Status: </b> <span onDoubleClick={activateEditMode}>{status || "-------"}</span>
                        {/* <span onDoubleClick={activateEditMode}>{status || "-------"}</span> */}
                    </div>
                )
            }
        </div>
    );
};

export default ProfileStatus;


