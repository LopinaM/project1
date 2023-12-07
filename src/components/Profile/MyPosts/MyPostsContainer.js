import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';


function MyPostsContainer(props) {
    debugger;
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }

    return (<MyPosts updateNewPostText={onPostChange} addPost={addPost} postData={state.profilePage.postData} newPostText={state.profilePage.newPostText} />)
}

export default MyPostsContainer;