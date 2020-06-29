import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Post extends Component {
   state = {
      post: null
   }
   componentDidMount() {
      axios
         .get('http://localhost:5000/posts/' + this.props.match.params.id)
         .then(res => {
            this.setState({ post: res.data })
            console.log(res)
         })

   }
   render() {
      const post = this.state.post
         ? (
            <div className="main-1 fixed">
               <h2 className="text-center header-post">{this.state.post.title}</h2>
               <div className="text-center data-center">
               <div className="data">
                  <p>March 2, 2016</p>
                  <p className="data-left">|</p>
                  <p className="data-left">Travel</p>
                  <p className="data-left">|</p>
                  <p className="data-left">{this.state.post.username}</p>
                  </div>
               </div>
               <div className="border-3"></div>
               <p>{this.state.post.body}</p>

            </div >
         )
         : (
            <div className="main-1">

               <div className="content">
                  <div className="ui large text loader">Loading</div>
               </div>

               <img
                  src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
                  alt="Loader"
                  className="ui image" />

            </div>
         )

      return (
         <div className="main-1">
            {post}
            <Link to={'/'}>
               <div className="button-center">
                  <button className="button-post">View all posts</button>
               </div>
            </Link>
         </div>
      )
   }
}
