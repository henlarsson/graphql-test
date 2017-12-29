const {
  GraphQLString,
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLObjectType,
} = require('graphql')

const UserType = new GraphQLObjectType({
  name: 'UserType',
  description: 'User type definition',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    email: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
  }),
})

const UserInputType = new GraphQLInputObjectType({
  name: 'UserInputType',
  description: 'User payload definition',
  fields: () => ({
    email: {
      type: GraphQLString,
    },
  }),
})

module.exports = {
  UserType,
  UserInputType,
}