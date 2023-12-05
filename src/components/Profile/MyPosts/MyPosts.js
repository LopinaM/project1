import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../redux/state';


function MyPosts(props) {


    let postsElement =
        props.postData.map(post => <Post message={post.message} likesCount={post.likesCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        // props.addPost();
        // props.updateNewPostText('');
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        console.log(text)
        // props.updateNewPostText(text);
        props.dispatch(updateNewPostTextActionCreator(text));
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