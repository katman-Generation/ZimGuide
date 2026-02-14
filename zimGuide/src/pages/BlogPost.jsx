import { useParams } from "react-router-dom";
import { blogPosts } from "../data/blog";

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) return <div className="py-32 text-center">Not Found</div>;

  return (
    <section className="py-32 px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl mb-6">{post.title}</h1>
      <p className="mb-10 opacity-60">{post.date}</p>
      <p>{post.content}</p>
    </section>
  );
}
