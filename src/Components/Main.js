import React, { Component } from "react";

import Title from "./Title";
import { Route } from "react-router-dom";
import Photowall from "./PhotoWall";
import { removePost } from "../redux/actions";

class Main extends Component {

    constructor() {
        super();

    }

    render() {
        return (

            <div>
                <Route exact path="/" render={
                    () => (
                        <div>
                            <Title title={'Photowall'} />
                            <Photowall {...this.props} />
                        </div>
                    )
                } />
                {/* <Route path="/AddPhoto" render = {
                    ({history}) => (
                   
                            <AddPhoto onAddPhoto = {(addedPost) =>{
                                this.addPhoto(addedPost);
                                history.push('/');
                            }}/>
                  
                    )
                }/> */}

            </div>
        )
    }

}

export default Main;