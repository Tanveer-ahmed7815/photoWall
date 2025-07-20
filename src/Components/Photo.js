import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";

function Photo(props) {

    const post = props.post;
    return <figure className="figure">
        <Link to={`/single/${post.id}`}><img className="photo" src={post.imageLink} alt={post.description} /></Link>
        <figcaption><p>{post.description}</p></figcaption>
        <div className="button-container">
            <button onClick={() => {
                props.startRemovingPost(props.index, post.id)
                props.history.push("/")
            }}>Remove</button>
            <Link className="button" to={`/single/${post.id}`}>
                <div className="comment-count">
                    {props.comments[post.id] ? props.comments[post.id].length : 0}
                </div>
            </Link>
        </div>
    </figure>
}

Photo.prototypes = {
    post: PropTypes.object.isRequired
}

/* 
 -If suppose between the Main component and our Photo component,
  there was at least 5 five compenents in between, and we wouldn't want to pass the store down
  from one prop to another, 
  So what we can do instead, inject store exactly how we did for Main component,
  and now we can export every photo component instance as a connected component .

  NOTE - Be carefull never to overuse this, as we don't want to disrupt the data flow,
  only do it for deeply nested components.

  Hence in this case, this is not a deeply nested component, so will comment it for now.
*/

// function mapStateToProps(state){
//     return {
//         posts : state
//     }
// }

// export default connect(mapStateToProps)(Photo);

export default Photo;