import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

function Profile() {
    return (
        <div className={s.content}>
            <div>
                <img src='https://cdn1.ozone.ru/s3/multimedia-0/6464071788.jpg' className={s.img} />
            </div>
        // https://cdn121.picsart.com/212677724003202.jpg'
            https://f.vividscreen.info/soft/b2ad36d4c9b611177638c686bcc596b0/Pink-Camellia-2880x1920.jpg
            <div>ava + description</div>
            <MyPosts />


        </div>
    )
}

export default Profile;