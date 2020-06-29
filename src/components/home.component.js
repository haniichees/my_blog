import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Post = props => (
   <div className="main-1">
      <h2 className="header-post">{props.post.title}</h2>
      <div className="data">
         <p>March 2, 2016</p>
         <p className="data-left">|</p>
         <p className="data-left">Travel</p>
         <p className="data-left">|</p>
         <p className="data-left">{props.post.username}</p>
      </div>
      <div className="text-p">
         <p>{props.post.body.slice(0, 150) + '...'}</p>
      </div>
      <button className="button-home"><Link className="post-export" to={'/posts/' + props.post._id}>Continue reading</Link></button>
      <div className="border-2"></div>
   </div>
)

export default class Home extends Component {
   constructor(props) {
      super(props);

      this.showMorePosts = this.showMorePosts.bind(this);

      this.state = { posts: [], quantity: 10 };

   }

   showMorePosts() {
      this.setState({
         quantity: this.state.quantity + 5
      });
   }

   postList() {
      return this.state.posts.map(currentpost => {
         return <Post post={currentpost} key={currentpost._id} />;
      })
   }

   render() {
      axios.get('http://localhost:5000/posts/')
         .then(res => {
            let newData = res
               .data
               .slice(0, this.state.quantity);
            this.setState({ posts: newData })
         })
         .catch((error) => {
            console.log(error);
         })

      return (
         <div>
            {this.postList()}
            <button className="moreposts" onClick={this.showMorePosts}>More posts</button>
         </div>
      )
   }
}