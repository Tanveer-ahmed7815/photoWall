/* 
 -All the actions of our app will be declared in this file.
*/

import { type } from "@testing-library/user-event/dist/type"

/* 
  -Action creator for remove.
  -Actions are just Javascript objects, however these objects are not portable and so 
   to make them protable and easier to test, we wrap them in functions,
   these functions are known as Action creators.
   Action creators are just functions that return an action.

*/

export function removePost(index){

    return {
               // The type is really important because when the action goes to the reducer,
        // it needs to specify to the reducer what type of event is occurring in our app.
        // The reducer has to know the action that was just passed in, ex- like adding a photo,
        // or removing a photo.
        type: 'REMOVE_POST',
        index: index
    }
}

export function addPost(post){
    return {
        type: 'ADD_POST',
        //as per ES6, if the argument name and the variable name is same
        //we can map it like below, just post
        post
    }
}

export function addComment(comment){
    return {
        type: 'ADD_COMMENT',
        comment
    }
}