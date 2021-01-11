import React, { Component} from 'react';
import axios                from '../../axios';
import {Route, NavLink, Switch}       from 'react-router-dom';

import Posts                from './Posts/Posts';
import NewPost              from './NewPost/NewPost';
import FullPost             from './FullPost/FullPost';

import './Blog.css';


class Blog extends Component {
 
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to="/posts" 
                                exact
                                //customizing the style. Requires NavLink instead of Link
                                activeClassName="my-active"
                                //works like in-line styling
                                activeStyle={{
                                    color: "#fa923f",
                                    textDecoration: "underline"
                                }}>Home</NavLink></li>
                            {/* <li><NavLink to="/new-post">New post</NavLink></li> */}
                            {/* OR */}
                            <li><NavLink to={{
                                            pathname: "/new-post",
                                            //examples that do nothing in this app
                                            hash: "#submit", 
                                            search: "?quick-submit=true"
                            }}>New post</NavLink></li>
                        </ul> 
                    </nav>
                </header>
                <section className="Posts">
                    <Switch>
                        <Route path="/new-post" component={NewPost}/>
                        <Route path="/posts" component={Posts}/>
                    </Switch>
                </section>
            </div>
        );
    }
}

export default Blog;