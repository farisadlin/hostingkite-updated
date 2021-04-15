const { ApolloServer, gql } = require("apollo-server");
const price = require('./data/price.json')
const services = require('./data/services.json')
const testimonial = require('./data/testimonial.json')

const typeDefs = gql`
  type Price {
    id: Int
    hosting_type: String
    price: Int
    duration: String
    capacity_space: Int
    capacity_type: String
    bandwidth_capacity: String
    bandwidth_type: String
    website_capacity: String
    website_type: String
    email_capacity: String
    email_type: String
    support_type: String
    support_capacity: String
    domain_policy: String
  }

  type Services {
    id: Int
    title: String
    desc: String
    url: String
  }

  type Testimonial {
    id: Int
    author: String
    job_position: String
    testimonial: String
    url_avatar: String
  }

  type Query {
    price: [Price]
    services: [Services]
    testimonial: [Testimonial]
  }
`;

const resolvers = {
  Query: {
    price: () => price,
    services: () => services,
    testimonial: () => testimonial
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({port: 9000}).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
