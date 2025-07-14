import { ArrowRight, ExternalLink, Github, GithubIcon } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Bird Spotter Project",
    description:
      "Designed and built a mobile app in SwiftUI that enables users to document bird sightings. Integrated map features and image capture, allowing real-time field data collection. This exam project showcased both UI/UX design and native iOS development capabilities.",
    image: "/projects/Project4.jpg",
    tags: ["Swift", "SwiftUI"],
    githubUrl: "https://github.com/lucasaholm/Birdspotter_App",
  },
  {
    id: 2,
    title: "Sall Whiskey Project",
    description:
      "Developed a logistics and batch management prototype for Sall Whiskey as part of a 3rd-semester academic project. The system was designed to support production tracking, batch scheduling, and inventory insights. Built with Java, the project showcased how digital tools could optimize operations for a growing craft distillery. Delivered as a proof-of-concept to illustrate potential digital transformation within their workflow.",
    image: "/projects/Project1.png",
    tags: ["Java"],
    githubUrl: "https://github.com/lucasaholm/2SemProjekt",
  },
  {
    id: 3,
    title: "Network Game Project",
    description:
      "Built a multiplayer 2D game using Java that teaches network communication fundamentals to students. Implemented real-time socket handling, basic game logic, and a simple graphics engine as part of a collaborative project.",
    image: "/projects/Project2.png",
    tags: ["Java"],
    githubUrl: "https://github.com/General-Zimmer/semester-3-networkGame",
  },
  {
    id: 4,
    title: "Video Wall Project",
    description:
      "Developed a secure, scalable CCTV video wall interface during my internship & final exam at OPARKO. Customers can now view real-time streams of their parking lots via OPARKO’s web platform. The solution uses Go for backend streaming, React for the UI, and Docker for deployment. Now actively used in production.",
    image: "/projects/Project3.png",
    tags: ["Go", "Typescript", "React", "Docker"],
  },
  {
    id: 5,
    title: "BikeWithUs Booking Project",
    description:
      "Collaborated with a real company to build a booking system for bike rentals using JavaScript and Express. Focused on route planning, user authentication, and handling booking logic. Delivered a working prototype in a group setting with agile methodologies.",
    image: "/projects/Project5.jpg",
    tags: ["JavaScript", "Express"],
    githubUrl: "https://github.com/lucasaholm/3semProjekt",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative scroll-mt-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here is some of the projects i've made over the years.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-3 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="mt-auto flex justify-between items-center">
                  {project.id !== 4 && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <GithubIcon size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/lucasaholm"
            target="_blank"
          >
            Check my github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
