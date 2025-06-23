const blogs = [
  {
    title: "Why I Love Cyberpunk Aesthetics",
    date: "2025-06-20",
    summary: "Exploring the intersection of tech and art in web design.",
    slug: "cyberpunk-aesthetics",
  },
  {
    title: "React + Vite + Tailwind: My Stack",
    date: "2025-06-15",
    summary: "Why I use this stack for all my projects.",
    slug: "my-stack",
  },
  // Add more blogs
];

export default function Blogs() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-green-300 mb-6">Blog</h2>
      <div className="flex flex-col gap-4">
        {blogs.map(blog => (
          <div key={blog.slug} className="border-l-4 border-green-400 pl-4 hover:bg-black/50 rounded transition">
            <h3 className="text-xl font-semibold">{blog.title}</h3>
            <p className="text-gray-400 text-sm">{blog.date}</p>
            <p className="text-gray-300">{blog.summary}</p>
            {/* For full blog, use routing or modal */}
          </div>
        ))}
      </div>
    </section>
  );
}
