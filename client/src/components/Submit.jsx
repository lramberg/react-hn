import React from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

const ADD_POST = gql`
    mutation addPost($title: String!, $url: String!) {
        addPost(title: $title, url: $url) {
            title 
            url
        }
    }
`

function AddPost() {
    let input;
    const [addPost] = useMutation(
        ADD_POST,
        {
            update(cache, { data: { addPost } }) {
                const { posts } = cache.readQuery({ query: this.props.query });
                cache.writeQuery({
                    query: this.props.query,
                    data: { posts: posts.concat([addPost] )},
                });
            }
        }
    );

    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    addPost({ variables: { title: input.value, url: input.value } });
                    input.value = '';
                }}
            >
                <label>title</label>
                <input 
                    ref={node => {
                        input = node;
                    }}
                />
                <label>url</label>
                <input 
                    ref={node => {
                        input = node;
                    }}
                />
                <button type="submit">submit</button>
            </form>
        </div>
    );
}


export default AddPost;