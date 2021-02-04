import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	uri: "https://efbt7nnlnzf6dabrhrvyyjs2ve.appsync-api.eu-west-1.amazonaws.com/graphql",
	cache: new InMemoryCache(),
});

export default client;
