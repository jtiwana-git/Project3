const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    profilePic: String
    coverPic: String
    website: String
    posts: [Post]!
  }

  type Post {
    _id: ID
    postText: String
    postAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(postId: ID!): Post
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(
      ID: ID!
      username: String
      profilePic: String
      coverPic: String
      website: String
    ): User
    login(email: String!, password: String!): Auth
    addPost(postText: String!): Post
    updatePost(postId: ID!, postText: String!): Post
    addComment(postId: ID!, commentText: String!): Post
    updateComment(
      commentAuthor: String
      commentId: ID!
      commentText: String!
    ): Post
    removePost(postId: ID!): Post
    removeComment(commentId: ID!): Post
  }
`;

module.exports = typeDefs;
