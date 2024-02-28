import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";
import { Field, reduxForm } from "redux-form";
import AddPostForm from "./AddPostForm/AddPostForm";

function MyPosts(props) {
  // const MyPosts = React.memo(props => {
  console.log("RENDER YO");

  let postsElement = props.posts.map((post) => (
    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
  ));

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>my posts</h3>
      <AddPostForm onSubmit={onAddPost} />
      <div className={s.posts}>{postsElement}</div>
    </div>
  );
}
// );

export default MyPosts;
