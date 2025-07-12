import PropTypes from "prop-types";
import React, { Component } from "react";

function Photo(props) {

    const post = props.post;
    return <figure className="figure">
        <img className="photo" src={post.imageLink} alt={post.description} />
        <figcaption><p>{post.description}</p></figcaption>
        <div className="button-container">
            <button onClick={() => {
                props.onRemovePhoto(post)
            }}>Remove</button>
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