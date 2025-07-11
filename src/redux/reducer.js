
import posts from "../data/posts";

/*
  - Declaring a reducer, which is just a function,
    The reducer functions takes in 2 arguments, 1st - current state of the application 
    which is always returned by the reducer function, upon returning it we're specifying that 
    this is the current state that's going to live in our application and in our store
    and 2nd - is the action, actions when they're dispatched, they describe that some event occured
    in our app, and when that event occurs in our app, when we press a button of some sort that needs
    to trigger a certain event, the action is dispatched and the purpose of that action is to somehow
    change the state via reducer.
*/
const postReducer = function posts(state = posts, action){

    return state;
}

export default postReducer;