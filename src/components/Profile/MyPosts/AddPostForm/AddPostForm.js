import React from 'react';
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requiredField } from '../../../../utils/validators/validators';
import { Textarea } from '../../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name="newPostText" placeholder='Post message'
                validate={[requiredField, maxLength10]} />
            <div>
                <button >Add Post</button>
            </div>
        </form>
    )
}

export default reduxForm({ form: "ProfileAddNewPostForm" })(AddPostForm);