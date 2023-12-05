import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {

    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts postData={props.profilePage.postData}
                newPostText={props.profilePage.newPostText}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText} />


        </div>
    )
}

export default Profile;