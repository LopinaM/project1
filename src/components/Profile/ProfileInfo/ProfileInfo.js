import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={s.content}>
            {/* <div>
                <img src='https://cdn1.ozone.ru/s3/multimedia-0/6464071788.jpg' className={s.img} />
            </div> */}
            <div className={s.descriphionBlock}>
                <div>
                    <img src={props.profile.photos.large} />
                </div>
                <div className={s.descriphionBlock2}>
                    {props.profile.fullName}
                </div>
                <div>
                    {props.profile.aboutMe}
                </div>
                <ProfileStatus status={"Hello"} />
            </div>
        </div>
    )
}

export default ProfileInfo;