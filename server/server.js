const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose');
const Post = require('./models/post');

mongoose.connect('mongodb+srv://ramberg:codechallenge@cluster0-9caci.azure.mongodb.net/test?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
    console.log('connected to mongoDB');
})

const typeDefs = gql`
    type Query {
        posts: [Post],
        post(id: ID): Post
    }

    type Mutation {
        addPost(title: String!, url: String!): Post
    }

    type Post {
        id: String,
        title: String,
        url: String,
        upvotes: Int
    }
`;

const resolvers = {
    Query: {
        posts: () => Post.find({})
    },
    Mutation: {
        addPost: (parent, { title, url }) => {
            let post = new Post({
                title,
                url
            });
            return post.save();
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
    console.log(`server listening on port ${ url }`);
})