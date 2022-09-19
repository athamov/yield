/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRestaueant = /* GraphQL */ `
  query GetRestaueant($id: ID!) {
    getRestaueant(id: $id) {
      id
      name
      description
      address
      createdAt
      updatedAt
    }
  }
`;
export const listRestaueants = /* GraphQL */ `
  query ListRestaueants(
    $filter: ModelRestaueantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRestaueants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        address
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
