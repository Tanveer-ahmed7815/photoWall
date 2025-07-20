import React, { Component } from "react";

class AddPhoto extends Component {

    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        const imageLink = event.target.elements.link.value;
        const description = event.target.elements.description.value;
        const post = {
                id: Number(new Date()),
                description: description,
                imageLink: imageLink
        }
        if(imageLink && description){
           this.props.startAddingPost(post)
           this.props.onHistory.push('/')
        }
    }

    render() {
        return (
            <div>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Link" name="link" />
                        <input type="text" placeholder="Description" name="description" />
                        <button>Post</button>
                    </form>
                </div>
            </div>
        )
    }

}

export default AddPhoto;


/* 
 Addphoto flow - 
 When we submit the form, it emits an action, that action goes to the reducer,
 and since that action is of type, add post, it will return the current state/post and 
 the array will also contain the post was just submitted and passed into our action
 as payload.
*/