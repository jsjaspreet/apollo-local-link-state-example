import React, { Component } from 'react';
import RandomColor from 'randomcolor';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag'

// basic style
const defaultStyle = {
  alignItems: 'center',
  padding: 10,
  display: 'flex',
  flexDirection: 'column'
};

class Meme extends Component {
  constructor(props) {
    super(props);
    this.state = { id: null, url: null, loaded: false };
  }

  // necessary to avoid all meme images being the same
  componentWillReceiveProps({ data }) {
    const url = data.giphy.random.images.original.url;
    const id = data.giphy.random.id;
    if (!this.state.loaded) {
      this.setState({ url, id, loaded: true })
    }
  }

  render() {
    const { data } = this.props;
    const { loading } = data;
    if (loading) {
      return null;
    }

    return (
      <div onClick={this.toggleSelect} style={{ ...defaultStyle, background: RandomColor() }}>
        MEME {this.state.id}
        <img alt="MEME" src={this.state.url}/>
      </div>);
  }
}

// colocate your data with your visual requirement, in production this query should live in a .graphql file alongside the react to avoid clutter
const query = gql`
  query getGif {
    giphy {
      random {
        id
        images {
          original {
            url
          }
        }
      }
    }
  }
`;

// use a network only policy to force fetch the query for each component instance
export default graphql(query, { options: { fetchPolicy: "network-only" } })(Meme);
