import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
//* Must be imported before any query can be run.
const uri = `https://graphql.contentful.com/content/v1/spaces/${
  process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string
}?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_KEY as string}`;
export const client = new ApolloClient({
  link: new HttpLink({
    uri: uri,
    fetch,
  }),
  cache: new InMemoryCache(),
});
