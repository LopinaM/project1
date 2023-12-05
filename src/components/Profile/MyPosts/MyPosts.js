import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';

function MyPosts(props) {


    let postsElement =
        props.postData.map(post => <Post message={post.message} likesCount={post.likesCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        // props.addPost();
        // props.updateNewPostText('');
        props.dispatch({ type: 'ADD-POST' });
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        console.log(text)
        // props.updateNewPostText(text);
        props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
    }

    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                {/* onChange={onPostChange} */}
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;