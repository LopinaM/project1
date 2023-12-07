import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../storeContext';


function MyPostsContainer(props) {


    return (
        <StoreContext.Consumer >{
            (store) => {
                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }
                let onPostChange = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text));
                }
                return <MyPosts updateNewPostText={onPostChange}
                    addPost={addPost}
                    postData={state.profilePage.postData}
                    newPostText={state.profilePage.newPostText} />
            }
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;