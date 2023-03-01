// const { gql } = require("@apollo/server");

const typeDefs = `#graphql
  input ChildInput {
    name: String
    age: Int
  }
  input CustomerInput {
    _id:ID!
    name: String
    family: String
    nationalCode: Int
    IdNo: Int
    childs: [ChildInput]
  }


  type Child {
    name: String
    age: Int
  }
  type Customer {
    _id:ID!
    name: String!
    family: String!
    nationalCode: Int
    IdNo: Int
    childs: [Child]
  }
  type Query {
    customers: [Customer!]!
    customer(id: ID!): Customer
  }
  type Mutation {
    newCustomer(customer: CustomerInput!): Customer!
    updateCustomer(customer: CustomerInput!): Customer!
    deleteCustomer(id: ID!): Boolean!
  }
`;

export default typeDefs;
