import React, { Component } from "react";

import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import Photowall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import { removePost } from "../redux/actions";

class Main extends Component {

    constructor() {
        super();

    }

    render() {
        console.log(this.props)
        return (
            
            <div>
                 <h1>
                    <Link to='/'>PhotoWall</Link>
                </h1>
                <Route exact path="/" render={
                    () => (
                        <div>
               
                            {/* posts= props.post, remove = props.removePost */}
                            <Photowall {...this.props} /> 
                        </div>
                    )
                } />
                <Route path="/AddPhoto" render = {
                    ({history}) => (
                   
                            <AddPhoto {...this.props} onHistory={history}/>
                  
                    )
                }/>

            </div>
        )
    }

}

export default Main;