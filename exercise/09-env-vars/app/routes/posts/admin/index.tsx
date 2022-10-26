import { Link, useLoaderData } from "@remix-run/react";
// import { json } from '@remix-run/node';

// not a good solution because this data will never change throughout the lifecycle of the app
//
// export async function loader() {
//   return json({
//     adminEmail: process.env.ADMIN_EMAIL
//   })
// }

export default function AdminIndex() {
  // const { adminEmail } = useLoaderData<typeof loader>()
  return (
    <p>
      <Link to="new" className="text-blue-600 underline">
        Create a New Post
      </Link>
      {/* Admin email: {process.env.ADMIN_EMAIL} */}
      {/* Admin email: {adminEmail} */}
      Admin email: {ENV.ADMIN_EMAIL}
    </p>
  );
}
