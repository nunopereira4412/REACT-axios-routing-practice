import React, { Component} from 'react';
import axios                from '../../axios';
import {Route, Link}              from 'react-router-dom';

import Posts                from './Posts/Posts';
import NewPost              from './NewPost/NewPost';

import './Blog.css';


class Blog extends Component {
 
    render () {
        return (
            <div className="Blog">
                <header>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        {/* <li><Link to="/new-post">New post</Link></li> */}
                        {/* OR */}
                        <li><Link to={{
                                        pathname: "/new-post",
                                        //examples that do nothing in this app
                                        hash: "#submit",
                                        search: "?quick-submit=true"
                                }}>New post</Link></li>
                    </ul> 
                </header>
                <section className="Posts">
                    <Route path="/" exact component={Posts}/>
                    <Route path="/new-post" component={NewPost}/>
                </section>
            </div>
        );
    }
}

export default Blog;