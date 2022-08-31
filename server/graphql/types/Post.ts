import { nonNull, objectType, stringArg, extendType } from 'nexus';

export const Post = objectType({
  name: 'Post',
  definition(t) {
    t.string('id');
    t.float('rating');
    t.string('author');
    t.string('authorId');
  },
});


// Fetch all Posts
export const PostsQuery = extendType({
    type: 'Query',
    definition(t) {
     t.nonNull.list.field('posts', {
        type: 'Post',
        resolve(_parent, _args, context) {
            return context.prisma.post.findMany();
        }
     })
    },
  });

