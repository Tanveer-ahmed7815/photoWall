import React, { Component } from "react";

import Title from "./Title";
import { Route } from "react-router-dom";
import Photowall from "./PhotoWall";

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
                            <Photowall posts={this.props.posts}/>
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