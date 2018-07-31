import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

//componetns
import BookList from './components/BookList';
import AddBook from './components/AddBook';

//apollo client
const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
})

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
      <div className="App">
      <h1>ninja list</h1>
      <BookList/>
      <AddBook/>
      </div>
      </ApolloProvider>
        );
    }
}

export default App;