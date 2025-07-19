import React, { Component } from "react";
import Photo from "./Photo";
import Comments from "./Comments";

class Single extends Component {

    render() {
        // const id = this.props.match.params.id;
        // const posts = this.props.posts;
        const { match, posts } = this.props;
        const id = Number(match.params.id);
        const post = posts.find((post) => post.id === id);
        const comments = this.props.comments;
        console.log(post.id);
        return <div className="single-photo">
            <Photo post={post} />
            <Comments addComment = {this.props.addComment} comments={comments}/>
        </div>
    }

}

export default Single;