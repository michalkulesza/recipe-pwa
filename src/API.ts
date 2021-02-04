/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateCategoryInput = {
  id?: string | null,
  name: string,
  userId: string,
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCategoryInput = {
  id: string,
  name?: string | null,
  userId?: string | null,
};

export type DeleteCategoryInput = {
  id?: string | null,
};

export type CreateTagInput = {
  id?: string | null,
  userId: string,
  name: string,
};

export type ModelTagConditionInput = {
  userId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelTagConditionInput | null > | null,
  or?: Array< ModelTagConditionInput | null > | null,
  not?: ModelTagConditionInput | null,
};

export type UpdateTagInput = {
  id: string,
  userId?: string | null,
  name?: string | null,
};

export type DeleteTagInput = {
  id?: string | null,
};

export type CreateRecipeInput = {
  id?: string | null,
  userId: string,
  categoryId: string,
  name: string,
  calories?: number | null,
  tagsId?: Array< string | null > | null,
  prepTime?: number | null,
  imageURL?: string | null,
};

export type ModelRecipeConditionInput = {
  userId?: ModelIDInput | null,
  categoryId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  calories?: ModelIntInput | null,
  tagsId?: ModelIDInput | null,
  prepTime?: ModelIntInput | null,
  imageURL?: ModelStringInput | null,
  and?: Array< ModelRecipeConditionInput | null > | null,
  or?: Array< ModelRecipeConditionInput | null > | null,
  not?: ModelRecipeConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateRecipeInput = {
  id: string,
  userId?: string | null,
  categoryId?: string | null,
  name?: string | null,
  calories?: number | null,
  tagsId?: Array< string | null > | null,
  prepTime?: number | null,
  imageURL?: string | null,
};

export type DeleteRecipeInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelTagFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelTagFilterInput | null > | null,
  or?: Array< ModelTagFilterInput | null > | null,
  not?: ModelTagFilterInput | null,
};

export type ModelRecipeFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  categoryId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  calories?: ModelIntInput | null,
  tagsId?: ModelIDInput | null,
  prepTime?: ModelIntInput | null,
  imageURL?: ModelStringInput | null,
  and?: Array< ModelRecipeFilterInput | null > | null,
  or?: Array< ModelRecipeFilterInput | null > | null,
  not?: ModelRecipeFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    name: string,
    recipes:  {
      __typename: "ModelRecipeConnection",
      items:  Array< {
        __typename: "Recipe",
        id: string,
        userId: string,
        categoryId: string,
        name: string,
        calories: number | null,
        tagsId: Array< string | null > | null,
        prepTime: number | null,
        imageURL: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    categories:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        name: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    tags:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        userId: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    name: string,
    recipes:  {
      __typename: "ModelRecipeConnection",
      items:  Array< {
        __typename: "Recipe",
        id: string,
        userId: string,
        categoryId: string,
        name: string,
        calories: number | null,
        tagsId: Array< string | null > | null,
        prepTime: number | null,
        imageURL: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    categories:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        name: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    tags:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        userId: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    name: string,
    recipes:  {
      __typename: "ModelRecipeConnection",
      items:  Array< {
        __typename: "Recipe",
        id: string,
        userId: string,
        categoryId: string,
        name: string,
        calories: number | null,
        tagsId: Array< string | null > | null,
        prepTime: number | null,
        imageURL: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    categories:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        name: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    tags:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        userId: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    userId: string,
    recipes:  {
      __typename: "ModelRecipeConnection",
      items:  Array< {
        __typename: "Recipe",
        id: string,
        userId: string,
        categoryId: string,
        name: string,
        calories: number | null,
        tagsId: Array< string | null > | null,
        prepTime: number | null,
        imageURL: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    userId: string,
    recipes:  {
      __typename: "ModelRecipeConnection",
      items:  Array< {
        __typename: "Recipe",
        id: string,
        userId: string,
        categoryId: string,
        name: string,
        calories: number | null,
        tagsId: Array< string | null > | null,
        prepTime: number | null,
        imageURL: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    userId: string,
    recipes:  {
      __typename: "ModelRecipeConnection",
      items:  Array< {
        __typename: "Recipe",
        id: string,
        userId: string,
        categoryId: string,
        name: string,
        calories: number | null,
        tagsId: Array< string | null > | null,
        prepTime: number | null,
        imageURL: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTagMutationVariables = {
  input: CreateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type CreateTagMutation = {
  createTag:  {
    __typename: "Tag",
    id: string,
    userId: string,
    name: string,
    recipes:  {
      __typename: "ModelRecipeConnection",
      items:  Array< {
        __typename: "Recipe",
        id: string,
        userId: string,
        categoryId: string,
        name: string,
        calories: number | null,
        tagsId: Array< string | null > | null,
        prepTime: number | null,
        imageURL: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTagMutationVariables = {
  input: UpdateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type UpdateTagMutation = {
  updateTag:  {
    __typename: "Tag",
    id: string,
    userId: string,
    name: string,
    recipes:  {
      __typename: "ModelRecipeConnection",
      items:  Array< {
        __typename: "Recipe",
        id: string,
        userId: string,
        categoryId: string,
        name: string,
        calories: number | null,
        tagsId: Array< string | null > | null,
        prepTime: number | null,
        imageURL: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTagMutationVariables = {
  input: DeleteTagInput,
  condition?: ModelTagConditionInput | null,
};

export type DeleteTagMutation = {
  deleteTag:  {
    __typename: "Tag",
    id: string,
    userId: string,
    name: string,
    recipes:  {
      __typename: "ModelRecipeConnection",
      items:  Array< {
        __typename: "Recipe",
        id: string,
        userId: string,
        categoryId: string,
        name: string,
        calories: number | null,
        tagsId: Array< string | null > | null,
        prepTime: number | null,
        imageURL: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRecipeMutationVariables = {
  input: CreateRecipeInput,
  condition?: ModelRecipeConditionInput | null,
};

export type CreateRecipeMutation = {
  createRecipe:  {
    __typename: "Recipe",
    id: string,
    userId: string,
    categoryId: string,
    name: string,
    calories: number | null,
    tagsId: Array< string | null > | null,
    prepTime: number | null,
    imageURL: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRecipeMutationVariables = {
  input: UpdateRecipeInput,
  condition?: ModelRecipeConditionInput | null,
};

export type UpdateRecipeMutation = {
  updateRecipe:  {
    __typename: "Recipe",
    id: string,
    userId: string,
    categoryId: string,
    name: string,
    calories: number | null,
    tagsId: Array< string | null > | null,
    prepTime: number | null,
    imageURL: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRecipeMutationVariables = {
  input: DeleteRecipeInput,
  condition?: ModelRecipeConditionInput | null,
};

export type DeleteRecipeMutation = {
  deleteRecipe:  {
    __typename: "Recipe",
    id: string,
    userId: string,
    categoryId: string,
    name: string,
    calories: number | null,
    tagsId: Array< string | null > | null,
    prepTime: number | null,
    imageURL: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    name: string,
    recipes:  {
      __typename: "ModelRecipeConnection",
      items:  Array< {
        __typename: "Recipe",
        id: string,
        userId: string,
        categoryId: string,
        name: string,
        calories: number | null,
        tagsId: Array< string | null > | null,
        prepTime: number | null,
        imageURL: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    categories:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        name: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    tags:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        userId: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      recipes:  {
        __typename: "ModelRecipeConnection",
        nextToken: string | null,
      } | null,
      categories:  {
        __typename: "ModelCategoryConnection",
        nextToken: string | null,
      } | null,
      tags:  {
        __typename: "ModelTagConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    userId: string,
    recipes:  {
      __typename: "ModelRecipeConnection",
      items:  Array< {
        __typename: "Recipe",
        id: string,
        userId: string,
        categoryId: string,
        name: string,
        calories: number | null,
        tagsId: Array< string | null > | null,
        prepTime: number | null,
        imageURL: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCategorysQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategorysQuery = {
  listCategorys:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      name: string,
      userId: string,
      recipes:  {
        __typename: "ModelRecipeConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTagQueryVariables = {
  id: string,
};

export type GetTagQuery = {
  getTag:  {
    __typename: "Tag",
    id: string,
    userId: string,
    name: string,
    recipes:  {
      __typename: "ModelRecipeConnection",
      items:  Array< {
        __typename: "Recipe",
        id: string,
        userId: string,
        categoryId: string,
        name: string,
        calories: number | null,
        tagsId: Array< string | null > | null,
        prepTime: number | null,
        imageURL: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTagsQueryVariables = {
  filter?: ModelTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTagsQuery = {
  listTags:  {
    __typename: "ModelTagConnection",
    items:  Array< {
      __typename: "Tag",
      id: string,
      userId: string,
      name: string,
      recipes:  {
        __typename: "ModelRecipeConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetRecipeQueryVariables = {
  id: string,
};

export type GetRecipeQuery = {
  getRecipe:  {
    __typename: "Recipe",
    id: string,
    userId: string,
    categoryId: string,
    name: string,
    calories: number | null,
    tagsId: Array< string | null > | null,
    prepTime: number | null,
    imageURL: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRecipesQueryVariables = {
  filter?: ModelRecipeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRecipesQuery = {
  listRecipes:  {
    __typename: "ModelRecipeConnection",
    items:  Array< {
      __typename: "Recipe",
      id: string,
      userId: string,
      categoryId: string,
      name: string,
      calories: number | null,
      tagsId: Array< string | null > | null,
      prepTime: number | null,
      imageURL: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type CategoriesByUserIdQueryVariables = {
  userId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CategoriesByUserIdQuery = {
  categoriesByUserId:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      name: string,
      userId: string,
      recipes:  {
        __typename: "ModelRecipeConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type TagsByUserIdQueryVariables = {
  userId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TagsByUserIdQuery = {
  tagsByUserId:  {
    __typename: "ModelTagConnection",
    items:  Array< {
      __typename: "Tag",
      id: string,
      userId: string,
      name: string,
      recipes:  {
        __typename: "ModelRecipeConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type RecipesByUserIdQueryVariables = {
  userId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRecipeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RecipesByUserIdQuery = {
  recipesByUserId:  {
    __typename: "ModelRecipeConnection",
    items:  Array< {
      __typename: "Recipe",
      id: string,
      userId: string,
      categoryId: string,
      name: string,
      calories: number | null,
      tagsId: Array< string | null > | null,
      prepTime: number | null,
      imageURL: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type RecipesByCategoryIdQueryVariables = {
  categoryId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRecipeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RecipesByCategoryIdQuery = {
  recipesByCategoryId:  {
    __typename: "ModelRecipeConnection",
    items:  Array< {
      __typename: "Recipe",
      id: string,
      userId: string,
      categoryId: string,
      name: string,
      calories: number | null,
      tagsId: Array< string | null > | null,
      prepTime: number | null,
      imageURL: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type RecipesByTagIdQueryVariables = {
  tagsId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRecipeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RecipesByTagIdQuery = {
  recipesByTagId:  {
    __typename: "ModelRecipeConnection",
    items:  Array< {
      __typename: "Recipe",
      id: string,
      userId: string,
      categoryId: string,
      name: string,
      calories: number | null,
      tagsId: Array< string | null > | null,
      prepTime: number | null,
      imageURL: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    name: string,
    recipes:  {
      __typename: "ModelRecipeConnection",
      items:  Array< {
        __typename: "Recipe",
        id: string,
        userId: string,
        categoryId: string,
        name: string,
        calories: number | null,
        tagsId: Array< string | null > | null,
        prepTime: number | null,
        imageURL: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    categories:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        name: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    tags:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        userId: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    name: string,
    recipes:  {
      __typename: "ModelRecipeConnection",
      items:  Array< {
        __typename: "Recipe",
        id: string,
        userId: string,
        categoryId: string,
        name: string,
        calories: number | null,
        tagsId: Array< string | null > | null,
        prepTime: number | null,
        imageURL: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    categories:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        name: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    tags:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        userId: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    name: string,
    recipes:  {
      __typename: "ModelRecipeConnection",
      items:  Array< {
        __typename: "Recipe",
        id: string,
        userId: string,
        categoryId: string,
        name: string,
        calories: number | null,
        tagsId: Array< string | null > | null,
        prepTime: number | null,
        imageURL: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    categories:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        name: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    tags:  {
      __typename: "ModelTagConnection",
      items:  Array< {
        __typename: "Tag",
        id: string,
        userId: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    userId: string,
    recipes:  {
      __typename: "ModelRecipeConnection",
      items:  Array< {
        __typename: "Recipe",
        id: string,
        userId: string,
        categoryId: string,
        name: string,
        calories: number | null,
        tagsId: Array< string | null > | null,
        prepTime: number | null,
        imageURL: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    userId: string,
    recipes:  {
      __typename: "ModelRecipeConnection",
      items:  Array< {
        __typename: "Recipe",
        id: string,
        userId: string,
        categoryId: string,
        name: string,
        calories: number | null,
        tagsId: Array< string | null > | null,
        prepTime: number | null,
        imageURL: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    userId: string,
    recipes:  {
      __typename: "ModelRecipeConnection",
      items:  Array< {
        __typename: "Recipe",
        id: string,
        userId: string,
        categoryId: string,
        name: string,
        calories: number | null,
        tagsId: Array< string | null > | null,
        prepTime: number | null,
        imageURL: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTagSubscription = {
  onCreateTag:  {
    __typename: "Tag",
    id: string,
    userId: string,
    name: string,
    recipes:  {
      __typename: "ModelRecipeConnection",
      items:  Array< {
        __typename: "Recipe",
        id: string,
        userId: string,
        categoryId: string,
        name: string,
        calories: number | null,
        tagsId: Array< string | null > | null,
        prepTime: number | null,
        imageURL: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTagSubscription = {
  onUpdateTag:  {
    __typename: "Tag",
    id: string,
    userId: string,
    name: string,
    recipes:  {
      __typename: "ModelRecipeConnection",
      items:  Array< {
        __typename: "Recipe",
        id: string,
        userId: string,
        categoryId: string,
        name: string,
        calories: number | null,
        tagsId: Array< string | null > | null,
        prepTime: number | null,
        imageURL: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTagSubscription = {
  onDeleteTag:  {
    __typename: "Tag",
    id: string,
    userId: string,
    name: string,
    recipes:  {
      __typename: "ModelRecipeConnection",
      items:  Array< {
        __typename: "Recipe",
        id: string,
        userId: string,
        categoryId: string,
        name: string,
        calories: number | null,
        tagsId: Array< string | null > | null,
        prepTime: number | null,
        imageURL: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRecipeSubscription = {
  onCreateRecipe:  {
    __typename: "Recipe",
    id: string,
    userId: string,
    categoryId: string,
    name: string,
    calories: number | null,
    tagsId: Array< string | null > | null,
    prepTime: number | null,
    imageURL: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRecipeSubscription = {
  onUpdateRecipe:  {
    __typename: "Recipe",
    id: string,
    userId: string,
    categoryId: string,
    name: string,
    calories: number | null,
    tagsId: Array< string | null > | null,
    prepTime: number | null,
    imageURL: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRecipeSubscription = {
  onDeleteRecipe:  {
    __typename: "Recipe",
    id: string,
    userId: string,
    categoryId: string,
    name: string,
    calories: number | null,
    tagsId: Array< string | null > | null,
    prepTime: number | null,
    imageURL: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
