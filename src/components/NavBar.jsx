import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Project", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <button
          className="text-xl font-bold text-primary flex-center"
          onClick={() => scrollToSection("#hero")}
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground"> Lucas Holm </span>{" "}
            Portfolio
          </span>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center space-x-8">
            {navItems.map((item, key) => (
              <button
                key={key}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Theme toggle with double spacing */}
          <div className="ml-16">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu overlay */}
        <div
          className={cn(
            "fixed top-0 left-0 w-full h-screen bg-background/80 backdrop-blur-md z-40",
            "flex flex-col items-center justify-center transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <button
                key={key}
                onClick={() => {
                  scrollToSection(item.href);
                  setTimeout(() => setIsMenuOpen(false), 400);
                }}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
