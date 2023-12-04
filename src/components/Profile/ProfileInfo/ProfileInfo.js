
import s from './ProfileInfo.module.css';

function ProfileInfo() {
    return (
        <div className={s.content}>
            <div>
                <img src='https://cdn1.ozone.ru/s3/multimedia-0/6464071788.jpg' className={s.img} />
            </div>
            <div className={s.descriphionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;