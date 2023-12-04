import s from './MyPosts.module.css';
import Post from './Posts/Post';

function MyPosts(props) {


    let postsElement =
        props.postData.map(post => <Post message={post.message} likesCount={post.likesCount} />);

    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <textarea></textarea>
                <div>
                    <button onClick={() => { alert('hello') }}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;