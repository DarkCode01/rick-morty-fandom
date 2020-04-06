import { gql } from 'apollo-boost';


export const CHARACTER = gql`
  query Character(
    $id: ID!
  ){
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      image
      created,
      episode {
      id
      name
      air_date
      episode
      characters {
        id
        name
      }
        }
      location {
        id
        name
        type
        dimension
        residents {
          id
          name
          image
        }
        created
      }
      origin {
        id
        name
        type
        dimension
        residents {
          id
          name
          image
        }
        created
      }
    }
  }
`

export const CHARACTERS = gql`
  query Characters(
    $page: Int!,
    $name: String!,
    $status: String!,
    $species: String!,
    $type: String!,
    $gender: String!
    ){
      characters(
        page: $page
        filter: { name: $name, status: $status, species: $species, type: $type, gender: $gender}
      ){
        info {
          count
          pages
          next
          prev
        }
        results {
          id
          name
          status
          type
          image
          created
          gender
          species
        }
      }
  }
`