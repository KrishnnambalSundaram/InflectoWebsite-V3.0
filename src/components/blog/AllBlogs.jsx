import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const COLORS = ["#F9F0F9", "#DBD7D2", "#E3FBFC", "#F3A7A066", "#FFFFE2"];
const TEXTCOLORS = ["#5B2E59", "#6F522C", "#1F6A6C", "#973B32", "#6B6A00"];
const categories = [
  "All",
  "AI & Automation",
  "AI Best Practices",
  "Digital Trends",
  "Industry Trends",
  "Informatica",
  "Integration & Architecture",
];

const blogsData = [
  {
    id: 1,
    title: "How AI is Changing CRM & ERP Systems",
    author: "Phoenix Baker",
    date: "19 Jan 2022",
    description: "Integrating AI into Salesforce for intelligent automation & efficiency.",
    category: "AI & Automation",
    tags: ["Salesforce", "AI", "Trending"],
    image: "https://picsum.photos/400/250?random=1",
    intro: `
In an era where personalization and real-time insights are non-negotiable,
traditional CRM platforms are no longer enough. Businesses today demand more
than contact databases — they need predictive intelligence, automation, and
AI-enhanced engagement. This is exactly where AI-powered CRM, like Salesforce
Einstein, is making a transformative impact.
    `,
    points: [
      {
        title: "1. From Reactive to Predictive",
        text: "Traditional CRMs respond to past behavior. AI-enhanced CRMs predict future behavior. Tools like Einstein Prediction Builder analyze trends and forecast customer actions, helping sales teams prioritize high-intent leads and proactively address churn risks."
      },
      {
        title: "2. Smarter Sales Enablement",
        text: "AI in CRM automatically scores leads, recommends actions, and even crafts personalized follow-up emails. Sales reps no longer waste hours segmenting data — Einstein does it for them, freeing them to focus on relationships. Time Saved: Up to 30% reduction in manual lead qualification tasks."
      },
      {
        title: "3. Enhanced Customer Experiences",
        text: "AI-powered CRMs personalize engagement across channels. Based on past interactions, customers receive tailored offers, content, and support — all in real time. Whether via chatbot, email, or app, the experience is seamless and human-like."
      },
      {
        title: "4. Seamless Integration with AI-Powered Tools",
        text: "CRM becomes even more powerful when integrated with tools like Tableau, MuleSoft, or RPA platforms. Businesses can unify data from marketing, sales, and support to generate real-time dashboards that guide decisions."
      }
    ]
  },
  {
    id: 2,
    title: "Best Practices in AI Adoption",
    author: "Phoenix Baker",
    date: "20 Jan 2022",
    description: "Practical steps for companies adopting AI in business workflows.",
    category: "AI Best Practices",
    tags: ["AI", "Best Practices"],
    image: "https://picsum.photos/400/250?random=2",
    intro: `
In an era where personalization and real-time insights are non-negotiable,
traditional CRM platforms are no longer enough. Businesses today demand more
than contact databases — they need predictive intelligence, automation, and
AI-enhanced engagement. This is exactly where AI-powered CRM, like Salesforce
Einstein, is making a transformative impact.
    `,
    points: [
      {
        title: "1. From Reactive to Predictive",
        text: "Traditional CRMs respond to past behavior. AI-enhanced CRMs predict future behavior. Tools like Einstein Prediction Builder analyze trends and forecast customer actions, helping sales teams prioritize high-intent leads and proactively address churn risks."
      },
      {
        title: "2. Smarter Sales Enablement",
        text: "AI in CRM automatically scores leads, recommends actions, and even crafts personalized follow-up emails. Sales reps no longer waste hours segmenting data — Einstein does it for them, freeing them to focus on relationships."
      },
      {
        title: "3. Enhanced Customer Experiences",
        text: "AI-powered CRMs personalize engagement across channels. Based on past interactions, customers receive tailored offers, content, and support — all in real time."
      },
      {
        title: "4. Seamless Integration with AI-Powered Tools",
        text: "CRM becomes even more powerful when integrated with tools like Tableau, MuleSoft, or RPA platforms. Businesses can unify data and generate real-time dashboards that guide decisions."
      }
    ]
  },
  {
    id: 3,
    title: "Top 5 Digital Trends in 2023",
    author: "Phoenix Baker",
    date: "21 Jan 2022",
    description: "Exploring the key trends shaping the digital world in 2023.",
    category: "Digital Trends",
    tags: ["Trends", "Digital"],
    image: "https://picsum.photos/400/250?random=3",
    intro: `
In an era where personalization and real-time insights are non-negotiable,
traditional CRM platforms are no longer enough. Businesses today demand more
than contact databases — they need predictive intelligence, automation, and
AI-enhanced engagement.
    `,
    points: [
      {
        title: "1. From Reactive to Predictive",
        text: "Traditional CRMs respond to past behavior. AI-enhanced CRMs predict future behavior, enabling sales teams to stay ahead of churn and growth opportunities."
      },
      {
        title: "2. Smarter Sales Enablement",
        text: "Automation scores leads, suggests next best actions, and crafts personalized follow-ups, saving sales teams up to 30% of their time."
      },
      {
        title: "3. Enhanced Customer Experiences",
        text: "Customers benefit from hyper-personalized engagement across channels, from chatbots to email."
      },
      {
        title: "4. Seamless Integration with AI-Powered Tools",
        text: "CRM systems integrated with tools like Tableau and MuleSoft unify data into real-time dashboards."
      }
    ]
  },
  {
    id: 4,
    title: "AI in Industry 4.0",
    author: "Phoenix Baker",
    date: "22 Jan 2022",
    description: "How AI is powering smart factories and manufacturing efficiency.",
    category: "Industry Trends",
    tags: ["Industry", "AI"],
    image: "https://picsum.photos/400/250?random=4",
    intro: `
Smart factories rely on AI to optimize production, reduce downtime, and improve efficiency. Industry 4.0 combines IoT, robotics, and predictive analytics to drive manufacturing innovation.
    `,
    points: [
      {
        title: "1. From Reactive to Predictive",
        text: "AI predicts machine failures and optimizes maintenance schedules to reduce downtime."
      },
      {
        title: "2. Smarter Workflows",
        text: "Automation of repetitive tasks improves throughput and reduces errors in production lines."
      },
      {
        title: "3. Enhanced Customer Experiences",
        text: "Manufacturers can deliver more customized products with AI-driven insights into demand."
      },
      {
        title: "4. Seamless Integration with AI-Powered Tools",
        text: "Integration with robotics and IoT platforms ensures real-time insights into factory operations."
      }
    ]
  },
  {
    id: 5,
    title: "Informatica for Data Integration",
    author: "Phoenix Baker",
    date: "23 Jan 2022",
    description: "Using Informatica tools for smarter enterprise data integration.",
    category: "Informatica",
    tags: ["Data", "Integration"],
    image: "https://picsum.photos/400/250?random=5",
    intro: `
Enterprises struggle with scattered data sources. Informatica tools provide intelligent pipelines for ETL, ensuring consistency and accessibility across departments.
    `,
    points: [
      {
        title: "1. From Reactive to Predictive",
        text: "Data integration powered by AI predicts bottlenecks and optimizes data flows proactively."
      },
      {
        title: "2. Smarter Data Workflows",
        text: "Automation in Informatica reduces manual mapping and accelerates integration processes."
      },
      {
        title: "3. Enhanced Data Accessibility",
        text: "Unified and clean datasets empower better decision-making across business units."
      },
      {
        title: "4. Seamless Integration with AI-Powered Tools",
        text: "Integration with analytics and BI tools like Tableau enhances visibility and business agility."
      }
    ]
  },
  {
    id: 6,
    title: "Modern Integration & Architecture",
    author: "Phoenix Baker",
    date: "24 Jan 2022",
    description: "Scalable patterns for system integration and enterprise architecture.",
    category: "Integration & Architecture",
    tags: ["Integration", "Architecture"],
    image: "https://picsum.photos/400/250?random=6",
    intro: `
Modern enterprise architecture requires scalable integration patterns. AI and automation play a key role in creating resilient, future-proof systems.
    `,
    points: [
      {
        title: "1. From Reactive to Predictive",
        text: "Architecture evolves from static systems to adaptive, predictive infrastructures."
      },
      {
        title: "2. Smarter Integration Workflows",
        text: "Reusable integration patterns reduce redundancy and save development time."
      },
      {
        title: "3. Enhanced Business Agility",
        text: "Organizations can quickly pivot by orchestrating APIs and services in real-time."
      },
      {
        title: "4. Seamless Integration with AI-Powered Tools",
        text: "Integration with RPA and AI platforms ensures scalable automation across ecosystems."
      }
    ]
  }
];


const AllBlogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const filteredBlogs =
    selectedCategory === "All"
      ? blogsData
      : blogsData.filter((blog) => blog.category === selectedCategory);

  const handleViewBlog = (blog) => {
    console.log(blog)
    const blogSlug = blog.title.toLowerCase().replace(/\s+/g, "-");
    navigate(`/blog/blogvisit/${blogSlug}`, { state: {blog} });
  };

  return (
    <div className="px-6 py-10">
      <h1 className="text-center text-3xl md:text-5xl manrope-bold text-[#4B371C] mb-8">
        All Blog Posts
      </h1>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-10 border-t border-b py-3 border-[#E2E2E2]">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs ibm-plex-sans-normal transition ${
              selectedCategory === cat
                ? "bg-[#70CBCF]"
                : " text-[#626262] hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="grid max-w-[95%] md:max-w-[85%] mx-auto gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredBlogs.map((blog) => (
          <div
            key={blog.id}
            onClick={() => handleViewBlog(blog)}
            className="cursor-pointer group rounded-lg overflow-hidden transition"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="h-48 w-full rounded-2xl object-cover group-hover:scale-98 transition"
            />
            <div className="p-4">
              <p className="text-xs text-[#E46356] ibm-plex-sans-normal">
                {blog.author} • {blog.date}
              </p>
              <h2 className="mt-2 text-lg font-bold text-[#4B371C] truncate manrope-regular">
                {blog.title}
              </h2>
              <p className="mt-2 text-xs text-gray-600 line-clamp-2 ibm-plex-sans-normal">{blog.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {blog.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 text-xs rounded-2xl manrope-normal"
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
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
