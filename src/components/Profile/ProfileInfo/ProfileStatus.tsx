import React, { ChangeEvent, useEffect, useState } from "react";

type PropsType = {
  status: string;
  updateStatus: (status: string) => void;
};
type StateType = {
  moodEdit: boolean;
  status: string;
};
type PropsTypes = PropsType & StateType;

const ProfileStatus: React.FC<PropsType> = (props) => {
  const [moodEdit, setMoodEdit] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setMoodEdit(true);
  };

  const deactivateEditMode = () => {
    setMoodEdit(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {moodEdit ? (
        <div>
          <input
            onChange={onStatusChange}
            autoFocus
            onBlur={deactivateEditMode}
            value={status}
          />
        </div>
      ) : (
        <div>
          <b>Status: </b>{" "}
          <span onDoubleClick={activateEditMode}>{status || "-------"}</span>
          {/* <span onDoubleClick={activateEditMode}>{status || "-------"}</span> */}
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
