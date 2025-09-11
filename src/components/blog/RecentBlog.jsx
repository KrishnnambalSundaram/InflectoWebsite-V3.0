import React from "react";
import blog1 from "../../assets/blog/blog.svg";
import { useNavigate } from "react-router-dom";

const COLORS = ["#F9F0F9", "#DBD7D2", "#E3FBFC", "#F3A7A066", "#FFFFE2"];
const TEXTCOLORS = ["#5B2E59", "#6F522C", "#1F6A6C", "#973B32", "#6B6A00"];

const blogs = [
  {
    id: 1,
    title: "Digital Transformation Trends in 2025",
    desc: "How AI-driven CRM is changing sales & customer engagement.",
    author: "Olivia Rhye",
    date: "20 Jan 2022",
    tags: ["DigitalTransformation", "AI", "Strategy"],
    image: "https://picsum.photos/400/250?random=1",
    content: `
      ERP and CRM systems are converging, with AI playing a major role.
      From predictive analytics to intelligent workflows, AI ensures 
      businesses can scale efficiently while keeping customers engaged.
    `,
    points: [
      {
        title: "1. Predictive Intelligence",
        text: "AI helps forecast customer behavior and market shifts, enabling proactive decision-making."
      },
      {
        title: "2. Smarter Workflows",
        text: "Automation powered by AI reduces manual effort and frees teams to focus on innovation."
      },
      {
        title: "3. Data-Driven Insights",
        text: "AI-driven analytics highlight patterns and trends, improving business agility."
      },
      {
        title: "4. Customer-Centric Growth",
        text: "AI tailors recommendations and solutions, delivering highly personalized customer journeys."
      }
    ]
  },
  {
    id: 2,
    title: "Best Practices for Digital Transformation",
    desc: "Why AI is at the core of modern CRM strategies.",
    author: "Olivia Rhye",
    date: "15 Feb 2022",
    tags: ["CRM", "BestPractices", "AI"],
    image: "https://picsum.photos/400/250?random=2",
    content: `
      Digital transformation requires a shift in tools, culture, and strategy.
      AI is central to this change, enabling organizations to adapt quickly 
      and deliver seamless experiences across platforms.
    `,
    points: [
      {
        title: "1. Adaptive Systems",
        text: "AI ensures CRMs evolve with changing business needs and user expectations."
      },
      {
        title: "2. Unified Data",
        text: "Bringing together customer data into a single source of truth with AI-driven clarity."
      },
      {
        title: "3. Process Automation",
        text: "Routine tasks like lead qualification and follow-ups are automated, saving time."
      },
      {
        title: "4. Experience Personalization",
        text: "Every customer touchpoint is tailored, building stronger relationships."
      }
    ]
  },
  {
    id: 3,
    title: "The Future of AI-Powered Businesses",
    desc: "How companies are scaling innovation with AI in 2025.",
    author: "Olivia Rhye",
    date: "10 Mar 2022",
    tags: ["Future", "AI", "Innovation"],
    image: "https://picsum.photos/400/250?random=3",
    content: `
      The future belongs to businesses that embrace AI across operations.
      From intelligent customer service to automated analytics, 
      AI is the key driver of growth and innovation.
    `,
    points: [
      {
        title: "1. Intelligent Assistance",
        text: "Virtual agents handle queries, boosting efficiency and reducing costs."
      },
      {
        title: "2. Scalable Innovation",
        text: "AI enables businesses to experiment, test, and launch faster than ever before."
      },
      {
        title: "3. Predictive Maintenance",
        text: "From manufacturing to IT, AI ensures systems run smoothly with minimal downtime."
      },
      {
        title: "4. Ethical AI",
        text: "Businesses are prioritizing transparency and fairness in AI deployments."
      }
    ]
  }
];


const RecentBlog = () => {
    const navigate = useNavigate();
    const handleViewBlog = (blog) =>{
        const slug = blog.title.toLowerCase().replace(/\s+/g, "-");
        navigate(`/blog/blogvisit/${slug}`, { state: { blog } });
    }
  return (
    <section className="w-full px-4 sm:px-8 md:px-4 py-10 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl manrope-bold text-[#4B371C] mb-10">
          Recent Blog Posts
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
          <div onClick={()=>handleViewBlog(blogs[0])} className="overflow-hidden bg-white ">
            <img
              src={blogs[0].image}
              alt={blogs[0].title}
              className="w-full aspect-auto max-h-[224px] object-cover rounded-3xl hover:scale-98 transition"
            />
            <div className="px-4 py-2 text-left">
              <p className="text-sm text-[#E46356]">
                {blogs[0].author} • {blogs[0].date}
              </p>
              <h3 className="text-xl manrope-semibold mt-1 text-[#4B371C] line-clamp-2">
                {blogs[0].title}
              </h3>
              <p className="text-sm ibm-plex-sans-regular text-black mt-2 line-clamp-3">
                {blogs[0].desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                {blogs[0].tags.map((tag, i) => (
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
          </div>

          <div className="flex flex-col gap-6 md:gap-3 lg:gap-6">
            {blogs.slice(1).map((blog, index) => (
              <div
                onClick={()=>handleViewBlog(blog)}
                key={blog.id}
                className="flex flex-col sm:flex-row bg-white overflow-hidden"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-auto w-auto md:max-w-[250px] md:max-h-[174px] rounded-3xl object-cover hover:scale-98 transition"
                />
                <div className="px-4 py-2 flex-1 text-left">
                  <p className="text-sm text-[#E46356]">
                    {blog.author} • {blog.date}
                  </p>
                  <h3 className="text-lg manrope-semibold mt-1 text-[#4B371C] line-clamp-1">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-black ibm-plex-sans-regular mt-2 line-clamp-2">
                    {blog.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-2 overflow-x-auto no-scrollbar">
                    {blog.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-2xl "
                        style={{
                          backgroundColor:
                            COLORS[(index + i) % COLORS.length],
                          color: TEXTCOLORS[(index + i) % TEXTCOLORS.length],
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentBlog;
