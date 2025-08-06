import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BusinessFlow } from "@/components/BusinessFlow";

const Index = () => {
  const fullText = "H3IMD3LL";
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [phase, setPhase] = useState<"intro" | "typing">("intro");
  const launchDate = new Date("2025-07-21T21:00:00Z");

  const calculateTimeLeft = () => {
    const difference = launchDate.getTime() - new Date().getTime();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (phase === "intro") {
      // Show "Introducing" for 1.5 seconds then start typing
      const timer = setTimeout(() => {
        setPhase("typing");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  useEffect(() => {
    if (phase !== "typing" || isPaused) return;

    const typingSpeed = isDeleting ? 120 : 200;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const next = fullText.slice(0, typedText.length + 1);
        setTypedText(next);
        if (next === fullText) {
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, 2000); // Pause after full text
        }
      } else {
        const next = fullText.slice(0, typedText.length - 1);
        setTypedText(next);
        if (next === "") {
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(false);
            setPhase("intro"); // Go back to intro after delete
          }, 1000);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, isPaused, phase]);

  return (
    <div className="min-h-screen bg-background">
      {/* Minimal Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-small font-medium tracking-wide">
              H3IMD3LL Labs, Inc.
            </div>

            <a
              href="https://github.com/H3IMD3LL-Labs-Inc/H3IMD3LL-v1.x.x"
              target="_blanc"
              rel="noopener noreferrer"
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="ml-4"
              >
                <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 008.02 10.94c.6.1.82-.26.82-.58v-2.17c-3.25.71-3.94-1.56-3.94-1.56a3.11 3.11 0 00-1.3-1.7c-1.06-.73.08-.72.08-.72a2.46 2.46 0 011.8 1.21 2.5 2.5 0 003.43.98 2.5 2.5 0 01.74-1.56c-2.6-.3-5.34-1.3-5.34-5.79a4.53 4.53 0 011.2-3.14 4.2 4.2 0 01.11-3.1s.98-.31 3.2 1.2a11 11 0 015.83 0c2.2-1.51 3.18-1.2 3.18-1.2a4.2 4.2 0 01.12 3.1 4.53 4.53 0 011.2 3.14c0 4.5-2.75 5.49-5.37 5.78a2.8 2.8 0 01.8 2.16v3.2c0 .32.21.69.83.57A11.5 11.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-hero mb-8 h-28 flex items-center justify-center relative">
            {phase === "intro" ? (
              <span className="absolute transition-opacity duration-500 opacity-100">
                Introducing
              </span>
            ) : (
              <span className="absolute transition-opacity duration-1000 opacity-100">
                {typedText}
              <span className="animate-plus">|</span>
              </span>
            )}
          </h1>
          <p className="text-subtitle mb-12 max-w-2xl mx-auto opacity-80">
            A source-available data platform that allows you to achieve factual reasoning when using various LLMs. What does this mean? Check out what our Engineers have to say!
          </p>
          <a href="/blog" rel="noopener noreferrer">
            <Button
                size="lg"
                className="text-white px-8 py-4 minimal-hover minimal-focus shadow-soft"
            >
              Engineering Blog
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-small opacity-40">
              © 2025 H3IMD3LL Labs, Inc.
            </div>
            <div className="text-small opacity-40">
              v1.x.x
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

