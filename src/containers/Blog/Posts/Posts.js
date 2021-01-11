import React, {Component} from 'react';
import axios from '../../../axios';

import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {

    state = {
        postsFromServer: null
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
            .catch(error => console.log(error));
    }

    postClickedHandler = (id) => this.setState({selectedPostId: id});

    render() {
        let posts = <p>Something went wrong!</p>

        // usefull to decide wether the user should continue and if not what the user should do instead
        if(!this.state.error) 
            if(this.state.postsFromServer)
                posts = this.state.postsFromServer.map(post => (
                    <Post 
                        key = {post.id}
                        title = {post.title}
                        author = {post.author}
                        clicked = {() => this.postClickedHandler(post.id)}
                    />
                ));

        return posts;
    }
}

export default Posts;