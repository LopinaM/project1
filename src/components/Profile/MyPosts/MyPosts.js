import s from './MyPosts.module.css';
import Post from './Posts/Post';

function MyPosts() {

    let postData = [
        { id: 1, message: 'Hi, how are you?', likesCount: '15' },
        { id: 2, message: "It's my first post!", likesCount: '20' }
    ]

    let postsElement = postData.map(post => <Post message={post.message} likesCount={post.likesCount} />);

    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <textarea></textarea>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;