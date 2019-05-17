const express = require('express')
const cors = require('cors')
const bodyParser = require('express')
const { makeExecutableSchema } = require('graphql-tools')
const { graphExpress, graphiqlExpress } = require('apollo-server-express')

const port = 9000

const typeDefs = `
    type Query {
        greeting: String
    }
`

const resolvers = {
    Query: {
        greeting: () => 'Hello world!'
    }
}

const schema = makeExecutableSchema({typeDefs, resolvers})

const app = express()
app.use(cors(), bodyParser.json())
app.use('/graphql', graphExpress({schema}))
app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}))
app.listen(port, () => console.log(`server running on port ${port}`))