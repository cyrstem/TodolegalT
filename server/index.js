const express = require('express')
const { graphql, buildSchema } = require('graphql')
const { graphqlHTTP } = require('express-graphql');
const schema = require ('./Scheme.js');
const cors = require('cors')






const app = express()
app.use(cors())
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => console.log('Listening on 4000'))
