const { ApolloServer, gql } = require('apollo-server');

const posts = [
    {
        title: 'github',
        url: 'https://github.com/lramberg',
        upvotes: 0
    },
    {
        title: 'linkedIn',
        url: 'https://www.linkedin.com/in/lyndsay-ramberg/',
        upvotes: 3
    },
    {
        title: 'portfolio',
        url: 'lyndsayramberg.com',
        upvotes: 1
    },
];

const typeDefs = gql`
    type Post {
        title: String,
        url: String,
        upvotes: Int
    }

    type Query {
        posts: [Post]
    }
`;

const resolvers = {
    Query: {
        posts: () => posts
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
    console.log(`server listening on port ${ url }`);
})