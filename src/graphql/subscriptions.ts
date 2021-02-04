/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag {
    onCreateTag {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag {
    onUpdateTag {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag {
    onDeleteTag {
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
export const onCreateRecipe = /* GraphQL */ `
  subscription OnCreateRecipe {
    onCreateRecipe {
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
export const onUpdateRecipe = /* GraphQL */ `
  subscription OnUpdateRecipe {
    onUpdateRecipe {
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
export const onDeleteRecipe = /* GraphQL */ `
  subscription OnDeleteRecipe {
    onDeleteRecipe {
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
