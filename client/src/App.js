import React,{Component} from 'react';
import {ApolloClient} from 'apollo-boost';
import { InMemoryCache } from 'apollo-boost';
import { HttpLink } from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
//Components
import BookList from './components/BookList';
import AddBook from './components/AddBook';


const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000/graphql'
});

const client = new ApolloClient({
  cache,
  link
});

class App extends Component {
  render (){
    return(
      <ApolloProvider client={client}>
        <div id="main">
          <BookList/>
          <AddBook/>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
