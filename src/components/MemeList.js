import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag'
import times from 'lodash.times';
import Meme from './Meme';

class MemeList extends Component {
  render() {
    const { data } = this.props;
    const { loading } = data;
    if (loading) {
      return null;
    }

    // construct a list of memes equal to
    // the number of times a user has clicked the add meme button
    // according to our local state
    const memes = times(data.numMemes, (index) => <Meme key={index}/>);

    return (
      <div>
        {
          memes
        }
      </div>
    );
  }
}


// fetch the current number of memes expected, @client syntax indicates this is a local query
const query = gql`
  query numMemes {
    numMemes @client
  }
`;

export default graphql(query)(MemeList);
