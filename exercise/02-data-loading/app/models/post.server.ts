import { prisma } from '~/db.server';

export async function getPostListItems() {
  // use prisma to get only the needed properties
  return prisma.post.findMany({
    select: {
      title: true,
      slug: true
    }
  });

  // raw posts
  // 
  // return [
  //   {
  //     slug: "my-first-post",
  //     title: "My First Post",
  //   },
  //   {
  //     slug: "90s-mixtape",
  //     title: "A Mixtape I Made Just For You",
  //   },
  // ]
}