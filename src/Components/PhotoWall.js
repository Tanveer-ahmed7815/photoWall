import React, { Component } from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


//function component
function Photowall(props) {
    return <div>
        {/* When we click on this Url link, then it will match the path that we have declared in
            the route, and if it matches the path, it will display in the UI */}
        <Link className="addIcon" to = '/AddPhoto'></Link>
        {/* <a className="addIcon" onClick={props.onNavigate} href = '#AddPhoto'></a> */}
        {/* <button className="addIcon" onClick={() => {
            props.onNavigate()
        }}></button> */}
        <div className="photo-grid">
            {props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />)}
        </div>
    </div>
}

Photowall.prototypes = {

    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired

}

//class components
// class Photowall extends Component{
//     render(){
//         return <div className="photo-grid">
//             {this.props.posts.map((post,index) => <Photo key={index} post={post}/>)}
//         </div>
//     }
// }

export default Photowall;