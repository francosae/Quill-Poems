import { gql } from 'apollo-server-express'

export const typeDefs = gql`
type User {
    email: String!
    name: String
}


type Query {
    allUsers: [User]!
}
`