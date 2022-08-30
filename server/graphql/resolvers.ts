import prisma from "../lib/prisma";

export const resolvers = {
    Query: {
      allUsers: () => {
        return prisma.user.findMany();
      }
    }
  };