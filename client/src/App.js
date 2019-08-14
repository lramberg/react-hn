import React, { Component } from 'react';
import './App.css';
import PostIndex from '../src/components/PostIndex';

class App extends Component {
    render() {
        return(
        <div className="App">
            <h1>Yo</h1>
            <PostIndex />
        </div>
        );
    }
}

export default App;
