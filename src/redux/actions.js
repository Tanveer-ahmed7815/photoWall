/* 
 -All the actions of our app will be declared in this file.
*/

import { type } from "@testing-library/user-event/dist/type"
import { database } from "../database/config"

/* 
  -Action creator for remove.
  -Actions are just Javascript objects, however these objects are not portable and so 
   to make them protable and easier to test, we wrap them in functions,
   these functions are known as Action creators.
   Action creators are just functions that return an action.

*/

export function startAddingPost(post) {
    return (dispatch) => {
        return database.ref('posts').update({ [post.id]: post }).then(() => {
            dispatch(addPost(post))
        }).catch((error) => {
            console.log(error)
        })
    }
}

/*
    How/when the posts are fetched and rendered ?
    -At first, the posts that we are mapping over to create the photo components is going to be empty.
    -Once the component mounts, we are going to grab everything form firebase by calling startLoadingPost
     in componentDidMount() in Main.js.
    -startLoadingPost grabs everything and loads it all on the array, and then we're going to dispatch an action.
    -The action will be loadPosts and we're going to pass into it as payload the data that we grabbed from firebase.
    -Upon emitting this action loadPosts, it's going to go to the reducer and update the store with the posts that we grabbed from firebase.
    -Since now our store is updated, it will re-render the UI and then this posts array that we're mapping
     over will not be empty anymore
*/

export function startLoadingPost() {
    return (dispatch) => {
        return database.ref('posts').once('value').then((snapshot) => {
            let posts = []
            snapshot.forEach((childSnapshot) => {
                posts.push(childSnapshot.val())
            })

            dispatch(loadPosts(posts))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function startRemovingPost(index, id) {
    return ((dispatch) => {
        return database.ref(`posts/${id}`).remove().then(() => {
            dispatch(removePost(index))
        })
    })
}

export function removePost(index) {

    return {
        // The type is really important because when the action goes to the reducer,
        // it needs to specify to the reducer what type of event is occurring in our app.
        // The reducer has to know the action that was just passed in, ex- like adding a photo,
        // or removing a photo.
        type: 'REMOVE_POST',
        index: index
    }
}

export function addPost(post) {
    return {
        type: 'ADD_POST',
        //as per ES6, if the argument name and the variable name is same
        //we can map it like below, just post
        post
    }
}

export function startAddingComment(comment, postId) {
    return (dispatch) => {
        return database.ref('comments/' + postId).push(comment).then(() => {
            dispatch(addComment(comment, postId))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function startLoadingComments() {
    return (dispatch) => {
        return database.ref('comments').once('value').then((snapshot) => {
            let comments = {}
            snapshot.forEach((childSnapshot) => {
                comments[childSnapshot.key] = Object.values(childSnapshot.val())
            })
            dispatch(loadComments(comments))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function loadComments(comments){
    return {
        type: 'LOAD_COMMENTS',
        comments
    }
}

export function addComment(comment, postId) {
    return {
        type: 'ADD_COMMENT',
        comment,
        postId
    }
}

export function loadPosts(posts) {
    return {
        type: 'LOAD_POSTS',
        posts
    }
}