import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getPostsQuery = gql`
    {
        posts {
            id
            title
            url
            upvotes
        }
    }
`

class PostIndex extends Component {
    constructor(props) {
        super(props);
    
    }

    displayPosts() {
        var data = this.props.data;
        if (data.loading) {
            return(<li>Loading...</li>)
        } else {
            return data.posts.map(post => {
                return(
                    <li key={ post.id }>
                        <a href={ post.url }>{ post.title }</a>
                        <p>{ post.upvotes }</p>
                    </li>
                )
            })
        }
    }

    render() {
        return(
        <div className="PostIndex">
            <ul>
                { this.displayPosts() }
            </ul>
        </div>
        );
    }
}

export default graphql(getPostsQuery)(PostIndex);