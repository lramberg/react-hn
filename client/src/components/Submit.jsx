import React, { Component } from 'react';
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
    const [addPost, { data }] = useMutation(ADD_POST);

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