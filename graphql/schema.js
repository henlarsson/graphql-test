const {
  GraphQLSchema,
  GraphQLObjectType,
} = require('graphql')

const {
  userQueries,
  userMutations,
} = require('./users/users')

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      ...userQueries,
    }),
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
      ...userMutations,
    }),
  }),
})

module.exports = schema