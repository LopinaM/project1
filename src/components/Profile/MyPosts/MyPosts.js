import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';
import { Field, reduxForm } from "redux-form";

function MyPosts(props) {

    let postsElement =
        props.postData.map(post => <Post message={post.message} likesCount={post.likesCount} />);


    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }


    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}


const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component="textarea" name="newPostText" placeholder='samuraiJs' />
            <div>
                <button >Add Post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm);

export default MyPosts;


