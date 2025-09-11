import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const COLORS = ["#F9F0F9", "#DBD7D2", "#E3FBFC", "#F3A7A066", "#FFFFE2"];
const TEXTCOLORS = ["#5B2E59", "#6F522C", "#1F6A6C", "#973B32", "#6B6A00"];

const BlogVisit = () => {
    const { blogName } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const blog = location.state?.blog;
  console.log(blog)
  const handleHome = () =>{
    navigate('/')
  }
  const handleBlogs = () =>{
    navigate('/blog')
  }
  if (!blog) return <p className="text-center py-10">No blog data provided.</p>;

  return (
    <section className="w-full px-4 sm:px-8 md:px-4 py-10 bg-white">
      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto text-sm text-gray-500 mb-6">
        <span className="cursor-pointer hover:underline" onClick={handleHome}>Home</span> {">"}{" "}
        <span className="cursor-pointer hover:underline" onClick={handleBlogs}>Blogs</span> {">"}{" "}
        <span className="text-[#E46356]">{blog.title}</span>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4 ">
          {blog.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-2xl"
              style={{
                backgroundColor: COLORS[i % COLORS.length],
                color: TEXTCOLORS[i % TEXTCOLORS.length],
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    
      {/* Blog Header */}
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl manrope-bold text-[#4B371C] mb-4">
          {blog.title}
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          {blog.author} • {blog.date} • 4 min read
        </p>

        {/* Image */}
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full max-h-[400px] object-cover rounded-3xl mb-8"
        />

        {/* Description / Content */}
        {blog?.content && (
          <p className="text-base text-center leading-relaxed ibm-plex-sans-normal text-black mb-10 whitespace-pre-line">
            {blog.content || blog.desc}
          </p>
        )}

        {/* Key Points */}
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {blog?.points?.map((point, i) => (
            <div key={i} className="text-center">
              <h3 className="text-lg md:text-xl manrope-bold text-[#4B371C] mb-2">
                {point.title}
              </h3>
              <p className="text-sm md:text-base ibm-plex-sans-normal text-gray-700 leading-relaxed">
                {point.text}
              </p>
            </div>
          ))}
</div>
      </div>
    </section>
  );
};

export default BlogVisit;
