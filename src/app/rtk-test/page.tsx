"use client";

import { useGetPostsQuery } from "../../../store/api/baseApi";

export default function RtkTestPage() {
  const { data, error, isLoading } = useGetPostsQuery();

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        Failed to fetch data
      </div>
    );

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">RTK Query Example</h1>
      <ul className="space-y-3">
        {data?.slice(0, 5).map((post) => (
          <li key={post.id} className="p-4 border rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
