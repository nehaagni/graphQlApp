const express = require('express');
const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');
const cors= require('cors');
// GraphQL schema to define the operations with types of data elements involved
var schema = buildSchema(`
type Query {
allEmployees: [employee]
employee(employee_id: Int!): employee
},
type employee {
employee_id: Int
firstname: String
lastname: String
}
`);
// Resolver logic to respond to the query
root = {
  employee: async ({ employee_id }) => {
    const empQuery = 'select employee_id, firstname, lastname from wtt.employee where employee_id='
      + emp_id;
    return psql.oneOrNone(empQuery);//using pgsql connection to get data
  },
  allEmployees: async (parent, args, ctx) => {
    const empQuery = 'select employee_id, firstname, lastname from wtt.employee';
    return psql.manyOrNone(empQuery);//using pgsql connection to get data
  },
};

//pg connection details
const pgPromise = require('pg-promise')({});
// add your Postgresql connection string details
const connStr =
  'postgresql://postgres:Personal1!@localhost:5432/postgres';
const psql = pgPromise(connStr); // get connection to your PG db instance

// Create an express server and a GraphQL endpoint
const app = express().use('*', cors());//cors included to enable CORS requests
app.use('/graphql', express_graphql({
schema: schema,
rootValue: root,
graphiql: true
}));
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));
