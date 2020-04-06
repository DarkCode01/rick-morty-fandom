import { gql } from 'apollo-boost';

export const EPISODES = gql`
  query Episodes (
    $page: Int!
    $name: String!
  ) {
    episodes (
      page: $page
      filter: { name: $name }
    ) {
      info {
        next
        prev
        count
        pages
      }
      results {
        id
        name
        episode
        air_date
        characters {
          id
          name
        }
      }
    }
  }
`