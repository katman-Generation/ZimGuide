import { blogPosts } from "../data/blog";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <section className="py-32 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl mb-12">Journal</h1>

      {blogPosts.map((post) => (
        <Link key={post.id} to={`/blog/${post.id}`}>
          <div className="mb-10">
            <h2 className="text-2xl">{post.title}</h2>
            <p className="opacity-70">{post.excerpt}</p>
          </div>
        </Link>
      ))}
    </section>
  );
}
