import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Sidebar from "./components/sidebar.component"
import Home from "./components/home.component";
import Post from "./components/post.component";
import About from "./components/about.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Sidebar />
        <br />
        <Route path="/" exact component={Home} />
        <Route path="/posts/:id" component={Post} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
