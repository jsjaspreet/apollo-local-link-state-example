import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import {
  Header,
  MemeList,
  AddMeme
} from './components';
import client from './graphql/client';
import './App.css';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Header/>
          <div style={{ padding: 10 }}>
            <AddMeme/>
          </div>
          <MemeList/>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
