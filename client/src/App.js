import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';

// components
import PostIndex from '../src/components/PostIndex';

const client = new ApolloClient({
    uri: 'http://localhost:4000'
})

class App extends Component {
    render() {
        return(
        <ApolloProvider client={ client }>
            <div className="App">
                <h1>Yo</h1>
                <PostIndex />
            </div>
        </ApolloProvider>
        );
    }
}

export default App;
