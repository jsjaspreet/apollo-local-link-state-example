import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

// purely client side mutation to increment the meme number (@client indicates a client side query)
const AddMemeMutation = gql`
  mutation AddMeme {
    addMeme @client
  }
`;

// simple button component that adds a meme to the page
class AddMeme extends Component {
  render() {
    return (
      <button onClick={() => this.props.mutate()}>
        Add Meme
      </button>
    )
  }
}

// attach the meme mutation as a prop on the button component
export default graphql(AddMemeMutation)(AddMeme);
