import ApolloClient from 'apollo-boost';

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
        // from a saga perspective, the mutation name is the "topic", and we can execute arbitary code inside this function (even async code)
        addMeme: (root, args, { cache }) => {
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

