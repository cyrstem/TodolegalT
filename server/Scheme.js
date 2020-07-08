const graphql = require('graphql')
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt,GraphQLNonNull } = graphql


//vuelo data
const fData =[{
    id:1,
    flightNumber:'12344',
    terminalNumber:'T3',
    checkIn:'D5',
    gate:'C',
    boarding:'6:55'

}]

//pass data
const pData =[{
  id:1,
  passengerName: 'Mr.Gavin Alfons',
  passagerPassport:'12344454454',
  passengerFlight: 'ETA499'
}]






//fdata response
const  FlightType = new GraphQLObjectType({
  name:'Flight',
  description: 'info from flightssss',
  fields: () => ({
    id:{ type:GraphQLNonNull(GraphQLInt)},
    flightNumber:{type: GraphQLNonNull(GraphQLInt)},
    terminalNumber:{ type:GraphQLNonNull(GraphQLString)},
    checkIn:{ type:GraphQLNonNull(GraphQLString)},
    gate:{ type:GraphQLNonNull(GraphQLString)},
    boarding:{ type:GraphQLNonNull(GraphQLString)},
    passenger:{
      type: new GraphQLList(PassengerType),
      resolve:()=> pData
    }

  })
})


//pasajero data
const  PassengerType = new GraphQLObjectType({
  name:'Passenger',
  description: 'info from passanger',
  fields: () => ({
    id:{ type:GraphQLNonNull(GraphQLInt)},
    passengerName:{type: GraphQLNonNull(GraphQLString)},
    passagerPassport:{ type:GraphQLNonNull(GraphQLInt)},
    passengerFlight:{ type:GraphQLNonNull(GraphQLString)},
  })
})



const RootQueryType = new GraphQLObjectType({
    name:'Query',   
    description: 'Root Query',
    fields:()=>({
      fData:{
        type: new GraphQLList(FlightType),
        description: 'data from flight',
        resolve: ()=> fData
      }
    })

})
const schema =new GraphQLSchema({
  query:RootQueryType
})
  
  module.exports = schema   