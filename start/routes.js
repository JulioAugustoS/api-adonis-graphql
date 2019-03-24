const Route = use('Route');
const GraphqlAdonis = use('ApolloServer');
const schema = require('../app/data/schema');

Route.route('/graphql', ({ request, auth, response }) => {
  return GraphqlAdonis.graphql({
    schema,
    context: { auth }
  }, request, response);
}, ['GET', 'POST']);

Route.get('/graphiql', ({ request, response }) => {
  return GraphqlAdonis.graphql({ endpointUrl: '/graphql' }, request, response);
})
