const {
  GraphQLList,
  GraphQLNonNull,
} = require('graphql')
const { internet, random, name } = require('faker')
const isEmail = require('validator/lib/isEmail')

const {
  UserType,
  UserInputType,
} = require('./usersTypes')

const userQueries = {
  users: {
    type: new GraphQLList(UserType),
    resolve: async () => {
      const users = await new Promise(resolve =>
        setTimeout(() =>
          resolve(new Array(10).fill(undefined).map(() => ({
            id: random.uuid(),
            email: internet.email(),
            name: name.findName()
          }))), 100),
      );
      return users;
    },
  },
}

// Ex:
// mutation {
//   createUser(input: {email: "graphql@test.com"}) {
//     id
//     name
//     email
//   }
// }
const userMutations = {
  createUser: {
    type: UserType,
    args: {
      input: {
        type: new GraphQLNonNull(UserInputType),
      },
    },
    resolve: async (rootValue, { input }) => {
      if (!isEmail(input.email)) {
        throw new Error('The email is not in a valid format');
      }
      const result = await new Promise((resolve) => {
        setTimeout(() =>
          resolve(Object.assign(input, {
            id: random.uuid(),
            name: "kalle"
          })), 100);
      });
      return result;
    },
  },
}

module.exports = {
  userQueries,
  userMutations,
}