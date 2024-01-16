import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import userPhoto from './../../../assets/images/user.jpg';

function ProfileInfo({ profile, status, updateStatus, isOwner, savePhoto }) {
    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
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
                </div>
                <div className={s.descriphionBlock2}>
                    {profile.fullName}
                </div>
                <div>
                    {profile.aboutMe}
                </div>
                <ProfileStatus status={status} updateStatus={updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo;