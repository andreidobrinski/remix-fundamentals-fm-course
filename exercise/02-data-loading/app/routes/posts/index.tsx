import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { getPostListItems } from "~/models/post.server";

export async function loader() {
  const posts = await getPostListItems();

  return json({ posts });

  // returns only the needed properties on `posts`, if prisma didn't already filter
  // return json({ posts: posts.map(p => ({ slug: p.slug, title: p.title })) });

  // does the same thing as this
  // 
  // return new Response(JSON.stringify(posts), {
  //   headers: {
  //     "Content-Type": "application/json"
  //   }
  // })
}

export default function Posts() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug} className="text-blue-600 underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
