const routes = require('express').Router()
const graphqlHTTP = require('express-graphql')
var faker = require('faker')
const schema = require('./graphql/schema')

const dev = process.env.NODE_ENV === 'development'

routes.use('/graphql', graphqlHTTP({
  schema,
  graphiql: dev,
}))

routes.get('/', (req, res) => {
  faker.seed(123)
  const name = faker.name.findName()
  res.status(200).send(`Just showing the same fake name, ${name}`)
})

module.exports = routes