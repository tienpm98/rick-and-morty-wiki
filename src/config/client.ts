import { ApolloClient, InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache()

const client = new ApolloClient({
	name: 'rick-and-morty-wiki-client',
	version: '0.1.0',
	uri: 'https://rickandmortyapi.com/graphql',
	cache,
})

export default client
