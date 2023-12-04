import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile() {
    return (
        <div className={s.content}>
            <ProfileInfo />
            {/* 
        // https://cdn121.picsart.com/212677724003202.jpg'
            https://f.vividscreen.info/soft/b2ad36d4c9b611177638c686bcc596b0/Pink-Camellia-2880x1920.jpg */}
            <MyPosts />


        </div>
    )
}

export default Profile;