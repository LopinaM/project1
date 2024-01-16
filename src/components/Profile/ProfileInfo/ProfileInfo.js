import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import userPhoto from './../../../assets/images/user.jpg';
import ProfileDataForm from "./ProfileDataForm";
import React, { useState } from 'react';

function ProfileInfo({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    return (
        <div className={s.content}>
            {/* <div>
                <img src='https://cdn1.ozone.ru/s3/multimedia-0/6464071788.jpg' className={s.img} />
            </div> */}
            <div className={s.descriphionBlock}>
                <div>
                    <img src={profile.photos.large || userPhoto} className={s.mainPhoto} />
                    {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}

                    {editMode
                        ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                        : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />}

                </div>
                {/* <div className={s.descriphionBlock2}>
                    {profile.fullName}
                </div>
                <div>
                    {profile.aboutMe}
                </div> */}
                <ProfileStatus status={status} updateStatus={updateStatus} />
            </div>
        </div>
    )
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return <div>
        {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
        <div>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>
        }
        {/* 
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div> */}
        {/* <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}
        </div> */}
    </div>
}


const Contact = ({ contactTitle, contactValue }) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;