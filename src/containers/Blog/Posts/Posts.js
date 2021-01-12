import React, {Component} from 'react';
import axios              from '../../../axios';
import {Route, Link}      from 'react-router-dom';

import Post               from '../../../components/Post/Post';
import FullPost           from '../FullPost/FullPost';
import './Posts.css';

class Posts extends Component {

    state = {
        postsFromServer: null
    }

    componentDidMount() {
        console.log("[Posts.js] componentDidMount");
        console.log(this.props);
        axios.get("posts")
            .then(response => {
                    const posts = response.data.slice(0, 3);
                    const updatedPosts = posts.map(post => {
                        return {
                            ...post,
                            author: "Max"
                        };
                    });
                    this.setState({postsFromServer: updatedPosts});
                })
            .catch(error => console.log(error));
    }

    postClickedHandler = (id) => this.props.history.push("/posts/" + id);

    render() {
        let posts = <p>Something went wrong!</p>
        // usefull to decide wether the user should continue and if not what the user should do instead
        if(!this.state.error) 
            if(this.state.postsFromServer)
                posts = this.state.postsFromServer.map(post => (
                    // <Link 
                        // to={"/posts/" + post.id}
                        // key = {post.id}
                        // >
                        <Post 
                            key = {post.id}
                            title = {post.title}
                            author = {post.author}
                            clicked = {() => this.postClickedHandler(post.id)}
                        />
                    // </Link> 
                ));

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + "/:id"} exact component={FullPost}/>
            </div>);
    }
}

export default Posts;