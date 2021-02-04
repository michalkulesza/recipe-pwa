/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      recipes {
        items {
          id
          userId
          categoryId
          name
          calories
          tagsId
          prepTime
          imageURL
          createdAt
          updatedAt
        }
        nextToken
      }
      categories {
        items {
          id
          name
          userId
          createdAt
          updatedAt
        }
        nextToken
      }
      tags {
        items {
          id
          userId
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      recipes {
        items {
          id
          userId
          categoryId
          name
          calories
          tagsId
          prepTime
          imageURL
          createdAt
          updatedAt
        }
        nextToken
      }
      categories {
        items {
          id
          name
          userId
          createdAt
          updatedAt
        }
        nextToken
      }
      tags {
        items {
          id
          userId
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      recipes {
        items {
          id
          userId
          categoryId
          name
          calories
          tagsId
          prepTime
          imageURL
          createdAt
          updatedAt
        }
        nextToken
      }
      categories {
        items {
          id
          name
          userId
          createdAt
          updatedAt
        }
        nextToken
      }
      tags {
        items {
          id
          userId
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      name
      userId
      recipes {
        items {
          id
          userId
          categoryId
          name
          calories
          tagsId
          prepTime
          imageURL
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      name
      userId
      recipes {
        items {
          id
          userId
          categoryId
          name
          calories
          tagsId
          prepTime
          imageURL
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      name
      userId
      recipes {
        items {
          id
          userId
          categoryId
          name
          calories
          tagsId
          prepTime
          imageURL
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
      id
      userId
      name
      recipes {
        items {
          id
          userId
          categoryId
          name
          calories
          tagsId
          prepTime
          imageURL
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
      id
      userId
      name
      recipes {
        items {
          id
          userId
          categoryId
          name
          calories
          tagsId
          prepTime
          imageURL
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
      id
      userId
      name
      recipes {
        items {
          id
          userId
          categoryId
          name
          calories
          tagsId
          prepTime
          imageURL
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createRecipe = /* GraphQL */ `
  mutation CreateRecipe(
    $input: CreateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    createRecipe(input: $input, condition: $condition) {
      id
      userId
      categoryId
      name
      calories
      tagsId
      prepTime
      imageURL
      createdAt
      updatedAt
    }
  }
`;
export const updateRecipe = /* GraphQL */ `
  mutation UpdateRecipe(
    $input: UpdateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    updateRecipe(input: $input, condition: $condition) {
      id
      userId
      categoryId
      name
      calories
      tagsId
      prepTime
      imageURL
      createdAt
      updatedAt
    }
  }
`;
export const deleteRecipe = /* GraphQL */ `
  mutation DeleteRecipe(
    $input: DeleteRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    deleteRecipe(input: $input, condition: $condition) {
      id
      userId
      categoryId
      name
      calories
      tagsId
      prepTime
      imageURL
      createdAt
      updatedAt
    }
  }
`;
