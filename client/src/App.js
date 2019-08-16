import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import './App.css';

// components
import PostIndex from '../src/components/PostIndex';
import NavBar from '../src/components/NavBar';
import Submit from '../src/components/Submit';

const client = new ApolloClient({
    uri: 'http://localhost:4000'
})

class App extends Component {
    render() {
        return(
        <ApolloProvider client={ client }>
            <div className="App">
                <NavBar />
                <Switch>
                    <Route exact path='/' render={() =>
                        <PostIndex />
                    } />
                    <Route exact path='/submit' render={() =>
                        <Submit />
                    } />
                </Switch>
            </div>
        </ApolloProvider>
        );
    }
}

export default App;
