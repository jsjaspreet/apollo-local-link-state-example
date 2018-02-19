import ApolloClient from 'apollo-boost';
// axios used as an example here, it has nothing to do with the actual graphql code
import axios from 'axios';

const client = new ApolloClient(({
  uri: 'https://www.graphqlhub.com/graphql',
  clientState: {
    // set a default value
    defaults: {
      numMemes: 0
    },
    resolvers: {
      Mutation: {
        // this mutation can do an arbitrary number of things inside this function
        // from a redux background, we can achieve updating the local store with `cache.writeData`
        // from a saga perspective, we can execute arbitary code inside this function (async right now to show an example)
        addMeme: async (root, args, { cache }) => {
          const randomFetch = await axios.get('https://swapi.co/api/people/1');
          console.log(randomFetch);
          const currMemes = cache.data.data.ROOT_QUERY.numMemes;
          const numMemes = currMemes + 1;
          cache.writeData({ data: { numMemes } });
          return numMemes;
        }
      }
    }
  },
}));

export default client;

