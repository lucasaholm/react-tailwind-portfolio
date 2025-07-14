import { Code, User, Briefcase } from "lucide-react";
import profileImg from "../assets/lucas-picture.jpg";
import cvPdf from "../assets/LUCAS-CV-CURRENT.pdf";

export const AboutSection = () => {
  const scrollToSection = (hash) => {
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    const targetY = el.getBoundingClientRect().top + window.pageYOffset;
    const startY = window.pageYOffset;
    const distance = targetY - startY;
    const duration = 800; // 👈 control speed here (ms)
    const startTime = performance.now();

    const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    const animate = (time) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOutQuad(progress);
      window.scrollTo(0, startY + distance * ease);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  return (
    <section id="about" className="py-24 px-4 relative scroll-mt-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <img
              src={profileImg}
              alt="Profile of Lucas Holm"
              className="w-64 h-64 rounded-full object-cover mx-auto border-4 border-primary shadow-md"
            />
            <h3 className="text-2xl font-semibold">
              Passionate Software Developer & Collaborative Teammate
            </h3>
            <p className="text-muted-foreground">
              I'm a recently graduated Software Developer from Erhvervsakademi
              Aarhus. My hands-on experience comes from academic projects, as
              well as a two-month full-time internship at OPARKO — followed by a
              two-month development project at the same company.
            </p>

            <p className="text-muted-foreground">
              For my final exam, I focused on the two-month project I completed
              at OPARKO. The goal was to develop a web application capable of
              streaming live footage from parking lots, enabling customers to
              view real-time CCTV camera streams from their parking lots.
            </p>

            <div className="flex flex-col sm-flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection("#contact")}
                className="button cursor-pointer"
              >
                Get in touch
              </button>
              <a
                href={cvPdf}
                target="_blank"
                download
                className="px-6 py-2 rounded-full bg-foreground text-background font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Frontend & Web</h4>
                  <p className="text-muted-foreground">
                    {" "}
                    Typescript/React, Javascript, Tailwind & HTML/CSS{" "}
                  </p>
                  <br />
                  <h4 className="font-semibold text-lg">
                    {" "}
                    Backend & Architecture
                  </h4>
                  <p className="text-muted-foreground">
                    {" "}
                    Java, Go, Swift, C#, & SQL{" "}
                  </p>
                </div>
                <div className="text-left"></div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    Lucas Andersen Holm
                  </h4>
                  <p className="text-muted-foreground">
                    {" "}
                    I'm a 26-year-old software developer, born and raised in
                    Denmark. I’m currently based in Aarhus, where I live with my
                    girlfriend. In my spare time, I enjoy staying active at the
                    gym, spending time with friends, and making the most of life
                    outside the screen.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Experience</h4>
                  <p className="text-muted-foreground">
                    {" "}
                    With a 2.5-year education in Software Development, I’ve
                    gained hands-on experience both through academic projects
                    and real-world work. I completed a full-time internship at
                    OPARKO, where I continued working part-time alongside my
                    studies. Before transitioning into tech, I worked across
                    various other industries — experiences that have helped
                    shape my work ethic, adaptability, and people skills.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
