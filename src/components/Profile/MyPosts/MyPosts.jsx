import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../untils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 =maxLengthCreator(10);

const AddNewPostForm=(props)=> {
    return   <form onSubmit={props.handleSubmit}>
        <div>
                    <Field component={Textarea}
                           name='newPostBody'
                           placeholder='Enter your post'
                           validate={[required,maxLength10]}/>
        </div>
        <div>
            <button >Add post</button>
        </div>
    </form>
}

const MyPostsFormRedux =  reduxForm({form: 'MyPostsAddNewPostForm'})(AddNewPostForm)

const MyPosts = props => {


    console.log('reder my posts')
    let postsElements =
        props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    let addNewPost = (values) => {
        props.addPost(values.newPostBody);
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <MyPostsFormRedux onSubmit={addNewPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;
