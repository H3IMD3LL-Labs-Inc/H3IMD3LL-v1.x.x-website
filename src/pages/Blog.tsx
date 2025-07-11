import { useState, useEffect } from "react";
import { Button } from  "@/components/ui/button";

const Blog = () => {

  const fullText = "What's H3IMD3LL?";
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
            <a href="/" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="minimal-hover minimal-focus"
              >
              Back 
              </Button>             
            </a>
            <div className="text-small font-medium tracking-wide">
              H3IMD3LL Labs, Inc.
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-hero mb-8 h-28 flex items-center justify-center relative overflow-hidden">
            <span className="text-center w-full absolute transition-opacity duration-1000 opacity-100 whitespace-nowrap inline-block">
              {typedText}
            <span className="animate-plus">|</span>
            </span>
          </h1>
          <p className="text-subtitle mb-12 max-w-2xl mx-auto opacity-80">
            Honestly, we found ourselves having a hard time answering this question. Because at its core we the H3IMD3LL Labs Engineering team know it's good software, I mean we use it ourselves to run our business. But how do we transfer the same use-case to other business' in different industries while also finding new use-cases?
          </p>
        </div>
      </section>

      {/* Blog Post Section */}
      <section className="pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-left">
            <blockquote className="border-l-4 border-border pl-4 italic text-body opacity-80 mb-6">
             “If all you have is a hammer, everything looks like a nail.” 
            </blockquote>

            <p className="text-body opacity-100 mb-6 leading-relaxed">
              At its core, H3IMD3LL, as a platform just makes it easier to manage, view and interact with your data over time. We know, we know? That's not really clear or a functionality explained. But think about it, lets assume you're a business owner, how many activities take place in your business premises? And of all those activities how many are critical to your business operations? We know the answer to both questions is "Alot". Now, let's assume that you outsourced decision making to another person without them having all the information you'd have, that wouldn't work out well. But feel free to try this, maybe it would work for you, who knows.
            </p>

            <p className="text-body opacity-100 mb-6 leading-relaxed">
              But honestly, it just wouldn't work. Unless the person entrusted to do this is extremely lucky or some other force out of our control helps them achieve this. That's where H3IMD3LL now comes in, all your systems data and information collected into one point whereby any one who has never interacted with your business' operations can simply understand them to a point you'd think they've been on your team for years. And the best part?....
            </p>

            <p className="text-body opacity-100 mb-6 leading-relaxed">
              It's all custom, while developing H3IMD3LL internally, we realised that different members of our team had different use cases for it that would require different ways to interact with H3IMD3LL. This made us believe you don't need a simple copy + paste implementation of H3IMD3LL for your business, what you need is a custom way for you(the user) to interact with H3IMD3LL, due to this, we came up with the concept of Forward Deployed SWE(Software Engineer). As you'll see during your onboarding process, we'll attach an individual engineer or team to handle your onboarding, that way we can work with you to create your custom implementation of how you'd want to view H3IMD3LL that you don't have to learn a whole new system when you could just use a system you were involved in building. Now, H3IMD3LL Labs. Inc. will never charge you an onboarding fee, this is because most onboarding will be done online, so there's no point.
            </p>

            <p className="text-body opacity-100 mb-6 leading-relaxed">
              At this point, you should have a good understanding of what H3IMD3LL was created to achieve. But you're probably asking yourself, doesn't it have more use-cases than just being a business tool? And yes, you're absolutely right, it does. The Engineering team at H3IMD3LL Labs, Inc. is always tinkering with new quirky and interesting ways H3IMD3LL can be played around with. I mean it literally started as a tool our founder built to track why he was losing sales.
            </p>

            <div className="text-sm text-body opacity-80 mt-12">
              Written by <strong>H3IMD3LL Labs Engineering team</strong> - July 2025
            </div>
          </div>
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

export default Blog;
