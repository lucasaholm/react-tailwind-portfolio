import { useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const skillIcons = {
  "HTML/CSS": "https://cdn.simpleicons.org/html5",
  Javascript: "https://cdn.simpleicons.org/javascript",
  "Typescript/React": "https://cdn.simpleicons.org/react",
  "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss",
  "Node.js": "https://cdn.simpleicons.org/nodedotjs",
  Express: "https://cdn.simpleicons.org/express",
  Java: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
  Go: "https://cdn.simpleicons.org/go",
  Swift: "https://cdn.simpleicons.org/swift",
  "C#": "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
  SQL: "https://cdn.simpleicons.org/mysql",
  "Git/Github": "https://cdn.simpleicons.org/github",
  Docker: "https://cdn.simpleicons.org/docker",
  Postman: "https://cdn.simpleicons.org/postman",
  MySQL: "https://cdn.simpleicons.org/mysql",
  Firebase: "https://cdn.simpleicons.org/firebase",
};

const skillDescriptions = {
  "HTML/CSS":
    "One of the first technologies I learned. I've used HTML/CSS extensively in academic projects to build responsive and accessible UIs from scratch. For example, I applied these skills in the BikeWithUs project to structure and style the website effectively.",
  Javascript:
    "I’ve spent many hours working with JavaScript, both in and outside school. I'm comfortable with core concepts like DOM manipulation, asynchronous programming, and event handling — which I’ve applied in multiple academic and personal projects.",
  "Typescript/React":
    "I started using TypeScript and React during my internship at OPARKO and expanded my experience while building the Video Wall project. I have a solid grasp of components, hooks, props typing, and scalable frontend architecture.",
  "Tailwind CSS":
    "I picked up Tailwind during my time at OPARKO and used it extensively in my final exam project. It has become my go-to for styling React components quickly and cleanly. I’m comfortable customizing utility classes and building responsive UI layouts.",
  "Node.js":
    "Introduced in school and used regularly in backend development. I’ve built APIs and services using Node.js, gaining familiarity with core concepts like routing and middleware through real-world projects.",
  Express:
    "Used Express in group projects, particularly for building RESTful APIs. In the BikeWithUs project, I combined Express with JavaScript to handle routing, authentication, and API endpoints efficiently.",
  Java: "Java was the first language I learned and remains one of my strongest. I’ve used it for OOP-heavy applications, JavaFX interfaces, and server-side logic. It’s given me a solid foundation in object-oriented design and software architecture.",
  Go: "I learned Go during my internship at OPARKO and used it in production for the Video Wall project. I’m familiar with writing HTTP servers, handling concurrency, and deploying compiled services within Docker environments.",
  Swift:
    "Built a native iOS app for my BirdSpotter exam project using SwiftUI. I gained experience with iOS design patterns, view lifecycles, state management, and creating user-friendly mobile interfaces.",
  "C#": "Learned during coursework and used for smaller projects. I have a basic understanding of the .NET ecosystem and Windows application structure. Still expanding my skills in this language.",
  SQL: "Used across several projects for relational database design, query building, and transactional logic. Comfortable with joins, indexing, and writing efficient SQL for production use.",
  "Git/Github":
    "Daily user of Git for version control. Familiar with GitHub workflows including branching, merging, pull requests, and working collaboratively via remote repositories.",
  Docker:
    "Self-taught through hands-on deployment experience at OPARKO. I’ve used Docker to containerize services like the video livestreaming backend and understand how to build, run, and manage containers effectively.",
  Postman:
    "Used extensively during backend development to test APIs, validate endpoints, and simulate client requests. Comfortable with setting up environments and reusable test cases.",
  MySQL:
    "Worked with MySQL in several backend projects, including at OPARKO. Experienced in creating schemas, writing queries, and optimizing data models for real-time applications.",
  Firebase:
    "I used Firebase as the backend database for two key projects: the BikeWithUs booking system and my SwiftUI BirdSpotter app. Leveraged its real-time capabilities and ease of integration for efficient data handling in both web and mobile environments.",
};

const skills = Object.keys(skillIcons).map((name) => {
  let category = "tools";
  if (
    ["HTML/CSS", "Javascript", "Typescript/React", "Tailwind CSS"].includes(
      name
    )
  )
    category = "frontend";
  else if (
    ["Node.js", "Express", "Java", "Go", "Swift", "C#", "SQL"].includes(name)
  )
    category = "backend";
  return { name, category };
});

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedSkill, setSelectedSkill] = useState(null);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="py-24 px-4 relative bg-secondary/30 scroll-mt-24"
    >
      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              onClick={() => setSelectedSkill(skill.name)}
              className="bg-card p-6 rounded-lg shadow-xs card-hover text-center flex flex-col items-center min-h-40 cursor-pointer"
            >
              <img
                src={skillIcons[skill.name]}
                alt={`${skill.name} logo`}
                className="w-10 h-10 mb-4"
              />
              <h3 className="font-semibold text-lg">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Popup */}
      {selectedSkill && (
        <>
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center px-4"
            onClick={() => setSelectedSkill(null)}
          >
            <div
              className="bg-card max-w-md w-full p-6 rounded-lg relative shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedSkill(null)}
                className="absolute top-3 right-3 text-muted-foreground hover:text-primary"
                aria-label="Close popup"
              >
                <X size={20} />
              </button>
              <div className="flex flex-col items-center gap-4 text-center">
                <img
                  src={skillIcons[selectedSkill]}
                  alt={`${selectedSkill} logo`}
                  className="w-12 h-12"
                />
                <h3 className="text-xl font-semibold">{selectedSkill}</h3>
                <p className="text-muted-foreground text-sm">
                  {skillDescriptions[selectedSkill]}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};
