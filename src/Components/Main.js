import React, { Component } from "react";

import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import Photowall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import Single from "./Single";

class Main extends Component {

    state = { loading: true }

    componentDidMount() {
        this.props.startLoadingPost().then(()=>{
          this.setState({loading: false})
        });
        this.props.startLoadingComments();
    }

    render() {
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
                <Route path="/AddPhoto" render={
                    ({ history }) => (

                        <AddPhoto {...this.props} onHistory={history} />

                    )
                } />
                {/* passing id as params from the URL */}
                <Route path="/single/:id" render={(params) => (
                    <Single loading={this.state.loading} {...this.props} {...params} />
                )} />

            </div>
        )
    }

}

export default Main;