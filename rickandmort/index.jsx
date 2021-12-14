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
