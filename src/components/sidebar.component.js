import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import facebook from '../img/Facebook.svg'
import instagram from '../img/Instagram.svg'
import github from '../img/Github.svg'
import twitter from '../img/Twitter.svg'

export default class Sidebar extends Component {

   render() {
      return (
         <div className="siderbar">
            <h2>My personal blog</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet sodales ipsum. Aenean felis nibh, dignissim eu tortor ut, pulvinar commodo tortor. Pellentesque gravida sapien velit, in pellentesque sapien sagittis nec.</p>
            <div className="border"></div>
            <ul className="list">
               <li className="element"><Link to="/">Home</Link></li>
               <li className="element"><Link to="/about">About</Link></li>
            </ul>
            <div className="border"></div>
            <ul className="list-container">
               <li><a href="https://www.facebook.com/"><img src={facebook} alt="Facebook" /></a></li>
               <li className="element-left"><a href="https://www.instagram.com/"><img src={instagram} alt="Instagram" /></a></li>
               <li className="element-left"><a href="https://github.com/"><img src={github} alt="GitHub" /></a></li>
               <li className="element-left"><a href="https://twitter.com/"><img src={twitter} alt="Twitter" /></a></li>
            </ul>
         </div>
      );
   }
}