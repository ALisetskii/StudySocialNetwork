import profileReducer, {addPostActionCreator, deletepost} from "./profile-reducer";
import React from 'react';

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    newPostText: 'it-kamasutra.com',
    profile: null,
    status: ''
};

it('length of posts should be incrimented', () => {
    // 1. test data
    let action = addPostActionCreator('kalamala')

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation


    expect(newState.posts.length).toBe(5);
});

it('correct message of new post', () => {
    // 1. test data
    let action = addPostActionCreator('kalamala')

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation


    expect(newState.posts[4].message).toBe('kalamala');
});

it('after deleting length should decrease', () => {
    // 1. test data
    let action = deletepost(1)

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation


    expect(newState.posts.length).toBe(3);
});

it('after deleting length should not change if postId is incorrect', () => {
    // 1. test data
    let action = deletepost(1111)

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation


    expect(newState.posts.length).toBe(4);
});
