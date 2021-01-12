import React, { Component, Suspense}  from 'react';
import axios                from '../../axios';
import {Route, NavLink, Switch, Redirect}       from 'react-router-dom';

import Posts                from './Posts/Posts';
import FullPost             from './FullPost/FullPost';
// import NewPost              from './NewPost/NewPost';
// import asyncComponent       from '../../hoc/asyncComponent';

import './Blog.css';

// const asyncNewPost = asyncComponent(() => import('./NewPost/NewPost'));
const Post = React.lazy(() => import('./NewPost/NewPost'));

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
                        {/* <Route path="/new-post" component={NewPost}/> */}

                        {/* <Route path="/new-post" component={asyncNewPost}/> */}

                        <Route path="/new-post" render={() => (
                            <Suspense fallback={<div>Loading...</div>}>
                                <Post/>
                            </Suspense>
                        )}/>

                        <Route path="/posts" component={Posts}/>
                        <Route render={() => <h1>Not Found</h1>}/>
                        <Redirect from="/" to="/posts"/>
                    </Switch>
                </section>
            </div>
        );
    }
}

export default Blog;