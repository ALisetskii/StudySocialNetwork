import React from 'react';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {actions} from "../../../redux/profile-reducer";
import {PostType} from "../../../types/types";

const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts
    }
}

export type MapPropsType = {
    posts: Array<PostType>
}
export type DispatchPropsType = {
    addPost: (newPostText: string) => void
}

const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {
    addPost: actions.addPostActionCreator
})(MyPosts);

export default MyPostsContainer;
