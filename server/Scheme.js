const graphql = require('graphql')
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt } = graphql



// //Construct a schema, using GraphQL schema language
// const schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello Graphql!';
  },
};

const schema = new GraphQLSchema({
    query: 'root'
  })
  
  module.exports = schema   