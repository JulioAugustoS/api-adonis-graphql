const Route = use('Route');
const GraphqlAdonis = use('ApolloServer');
const schema = require('../app/data/schema');

Route.route('/graphql', ({ request, auth, response }) => {
  return GraphqlAdonis.graphql({
    schema,
    context: { auth }
  }, request, response);
}, ['GET', 'POST']);

Route.get('/graphql', ({ request, response }) => {
  return GraphqlAdonis.graphql({ endpoinstUrl: '/graphql' }, request, response);
})
