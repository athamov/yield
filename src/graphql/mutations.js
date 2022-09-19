/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRestaueant = /* GraphQL */ `
  mutation CreateRestaueant(
    $input: CreateRestaueantInput!
    $condition: ModelRestaueantConditionInput
  ) {
    createRestaueant(input: $input, condition: $condition) {
      id
      name
      description
      address
      createdAt
      updatedAt
    }
  }
`;
export const updateRestaueant = /* GraphQL */ `
  mutation UpdateRestaueant(
    $input: UpdateRestaueantInput!
    $condition: ModelRestaueantConditionInput
  ) {
    updateRestaueant(input: $input, condition: $condition) {
      id
      name
      description
      address
      createdAt
      updatedAt
    }
  }
`;
export const deleteRestaueant = /* GraphQL */ `
  mutation DeleteRestaueant(
    $input: DeleteRestaueantInput!
    $condition: ModelRestaueantConditionInput
  ) {
    deleteRestaueant(input: $input, condition: $condition) {
      id
      name
      description
      address
      createdAt
      updatedAt
    }
  }
`;
