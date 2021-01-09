import React, { Component } from 'react';
import axios from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';


class Blog extends Component {

    state = {
        postsFromServer: null,
        selectedPostId: null,
        error: false
    }

    componentDidMount() {
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
                .catch(error => this.setState({error: true}));
    }

    postClickedHandler = (id) => this.setState({selectedPostId: id});

    render () {
        let posts = <p>Something went wrong!</p>

        // usefull to decide wether the user should continue and if not what the user should do instead
        if(!this.setState.error) 
            if(this.state.postsFromServer)
                posts = this.state.postsFromServer.map(post => (
                    <Post 
                        key = {post.id}
                        title = {post.title}
                        author = {post.author}
                        clicked = {() => this.postClickedHandler(post.id)}
                    />
                ));
    
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost/>
                </section>
            </div>
        );
    }
}

export default Blog;