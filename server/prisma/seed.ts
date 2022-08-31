import { PrismaClient } from "@prisma/client";
import { posts } from '../data/posts'

const prisma = new PrismaClient()

async function main(){
    await prisma.user.create({
        data: {
            name: "Paul",
            email: "paulfranco.e@gmail.com",
            isAdmin: true,
        }
    })

    await prisma.post.createMany({
        data: posts,
    })
}

main()
    .catch((e) =>{
        console.log(e)
        process.exit(1);
    })
        .finally(async () => {
        await prisma.$disconnect();
    })