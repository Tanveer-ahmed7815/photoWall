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
const postReducer = function post(state = posts, action){
    console.log(action.index)
    /* 
      When the reducer gets invoked and the action has a type of REMOVE_POST,
      So the remove post action, when that gets triggered, when that gets dispacthed,
      we want to return a state, not modify a state, but return a state that doesn't 
      include the post at that specified index that we pass in as payload,
      thus updating the state, not writing to it.
    */
    switch(action.type){
      case 'REMOVE_POST': return [...state.slice(0,action.index), ...state.slice(action.index + 1)];
      case 'ADD_POST':return [...state, action.post]
      default: return state;

    }
}

export default postReducer;