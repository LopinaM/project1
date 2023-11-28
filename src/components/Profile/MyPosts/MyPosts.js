import s from './MyPosts.module.css';
import Post from './Posts/Post';

function MyPosts() {
    return (
        <div>
            my posts
            <div>
                <textarea></textarea>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <Post message='Hi, how are you?' likesCount='15' />
            <Post message="It's my first post!" likesCount='20' />
        </div>
    )
}

export default MyPosts;