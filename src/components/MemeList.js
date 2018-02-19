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

    return (
      <div>
        {
          times(data.numMemes, (index) => <Meme key={index}/>)
        }
      </div>
    );
  }
}


const query = gql`
  query numMemes {
    numMemes @client
  }
`;

export default graphql(query)(MemeList);
