import { connect } from "react-redux";
import Main from "./Main";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router";
import * as actions from '../redux/actions'


/* 
  -This is where we will connect our store to Main component.
  1st argument state - which is living inside of Store.
  - The function is going to take our state living inside of store
    and map it to props.
    So we took the state from our store, the posts, and we mapped it into props such that
    it will enable us to access the state posts inside of our component by simply writing this.props.posts
*/

function mapStateToProps(state){
    return {
        posts : state.post,
        comments: state.comments
    }
}

/* This fuctions save us from having to write dispatch action creator in Main component */
function mapDispatchToProps(dispatch){
  return bindActionCreators(actions,dispatch)
}

/* 
   - Connect is the one going to inject the props into a certain component.
     This returns a new component which takes as an argument the component
     into which we're going to inject our state. 
     And that will be the Main component.

     Hence we will pass the Main component as the component that's going to receive
     the state from our store as props.

   - The main thing to note here is that connect doesn't actually modify the component class
     that is passed into it, instead it's returning a new connected component App.

   - A connected component is simply a component, but it's a component
     that's connected to a redux store.
     So if we start by rendering the component App, we're still going to render the
     Main component, except now the Main component will be connected to our store.

*/

/* 
   - When connecting a component to a Redux store via connect, the component
     stops updating the location change.
   - A fix was made for this by going over to wherever we're connecting
     our Main component to the store,
     importing with-router from React router and wrap everything with the
     withRouter
*/
const App = withRouter(connect(mapStateToProps,mapDispatchToProps)(Main))

export default App

