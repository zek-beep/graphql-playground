import { ApolloClient, gql } from '@apollo/client'
import { cache } from './cache'


const getApolloClient = () => {
  const client = new ApolloClient({
    cache,
    uri: 'https://rickandmortyapi.com/graphql',
  }) 
  return client
}

export default getApolloClient

import { gql } from "@apollo/client";
import client from ".";

client 
  .query({
    query: gql`
      query client {
        characters {
          name
          id 
        }
      }
    `
  })
  .then(result => console.log(result));
