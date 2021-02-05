import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

// import { auth } from '../firebase';
import { GRAPHQL_URL } from './config';

const cache = new InMemoryCache({
  addTypename: false,
});

const httpLink = createHttpLink({
  credentials: 'include',
  uri: GRAPHQL_URL,
});

const authLink = setContext(async (req, { headers }) => {
  // const token = await auth.currentUser?.getIdToken();

  return {
    headers: {
      ...headers,
      // authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  cache,
  link: authLink.concat(httpLink),
});

export default client;
