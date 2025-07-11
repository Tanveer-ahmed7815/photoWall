import React, { Component } from "react";

import Title from "./Title";
import Photowall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import { Route } from "react-router-dom";

class Main extends Component {

    /* 
       - Constructor sets the initial state of our component with zero elements in the array. 
       - Render method is called no pictures show up since the array that we're mapping is empty.
       - Then componentDidMount gets called right after the component instance was inserted into DOM.
       - Simulates an API request to grab the photos from a db and updates the component state such that 
         the post property of our state is updated to the data that we fetch from the API.
       - Since we updated the state, the render method gets called again and with the updated post property
         of our state it will rerender the UI.
    */

    constructor() {
        super();
        this.state = {
            posts: [{
                id: 0,
                description: "beautiful landscape",
                imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
                    "3919321_1443393332_n.jpg"
            }, {
                id: 1,
                description: "Aliens???",
                imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
            }, {
                id: 2,
                description: "On a vacation!",
                imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
            }],
          /*  screen: 'photos' //photos addPhoto */
        }

        this.removePhoto = this.removePhoto.bind(this);
      /*  this.navigate = this.navigate.bind(this); */
        this.addPhoto = this.addPhoto.bind(this);
        console.log('constructor');
    }

    removePhoto(postRemoved) {
        console.log(postRemoved.description);
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }))
    }

    addPhoto(postSubmitted){
        this.setState((state) => ({
            posts: state.posts.concat([postSubmitted])
        }))
    }

    /*
    navigate() {
        this.setState({
            screen: 'addPhoto'
        })
    }
        */


    /*
    componentDidMount(){
        const data = SimulateFetchFromDatabase();
        this.setState({
            posts : data
        })
        console.log('componentDidMount')
    }
        */

    /*
    componentDidUpdate(){
        alert('re-render')
        console.log('componentDidUpdate')
    }
        */

    render() {

        console.log(this.state.posts);

        /* 
             - Changing component based on state.
        return <div>
             {
                 this.state.screen === 'photos' && (
                     <div>
                         <Title title={'Photowall'} />
                         <Photowall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate = {this.navigate} />
                     </div>
                 )
             }
             {
                 this.state.screen === 'addPhoto' && (
                     <div>
                         <AddPhoto />
                     </div>
                 )
             }
         </div>
         */

        return (


            <div>
                <Route exact path="/" render={
                    () => (
                        <div>
                            <Title title={'Photowall'} />
                            <Photowall posts={this.state.posts} onRemovePhoto={this.removePhoto}/>
                        </div>
                    )
                } />

{/* - When we access this prop inside of the AddPhoto component, we want to trigger an arrow function
    - Inside of our router, we have access to prop that's passed into from React router called history,
      which we can access as a property of an Object. And we can use this prop to manage the navigation stack
      and go back to the previous page by writing history.push
    */}
                <Route path="/AddPhoto" render = {
                    ({history}) => (
                   
                            <AddPhoto onAddPhoto = {(addedPost) =>{
                                this.addPhoto(addedPost);
                                history.push('/');
                            }}/>
                  
                    )
                }/>

            </div>
        )
    }

}

/*
function SimulateFetchFromDatabase(){
    return [{
        id: "0",
        description: "beautiful landscape",
        imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
            "3919321_1443393332_n.jpg"
    }, {
        id: "1",
        description: "Aliens???",
        imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
    }, {
        id: "2",
        description: "On a vacation!",
        imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
    }]
}
    */

export default Main;