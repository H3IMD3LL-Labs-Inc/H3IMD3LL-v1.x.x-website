import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BusinessFlow } from "@/components/BusinessFlow";

const Index = () => {
  const fullText = "H3IMD3LL";
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const typingSpeed = isDeleting ? 120 : 200;

    const timer = setTimeout(() => {
      const current = fullText;

      if (!isDeleting) {
        const nextText = current.slice(0, typedText.length + 1);
        setTypedText(nextText);

        if (nextText === current) {
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, 2000); // pause before deleting
        }
      } else {
        const nextText = current.slice(0, typedText.length - 1);
        setTypedText(nextText);

        if (nextText === "") {
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(false);
            setLoopIndex(loopIndex + 1);
          }, 1000); // pause before retyping
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, loopIndex, isPaused]); 

  return (
    <div className="min-h-screen bg-background">
      {/* Minimal Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-small font-medium tracking-wide">
              H3IMD3LL Labs, Inc.
            </div>
            <div className="text-small tracking-wide opacity-60">
              v1.x.x
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-hero mb-8">
            {typedText}
            <span className="animate-plus">|</span>
          </h1>
          <div className="text-medium font-bold tracking-wide mb-6">
            Insights_as_a_Service
          </div>
          <p className="text-subtitle mb-12 max-w-2xl mx-auto opacity-80">
            A better way to manage, view and interact with your data to make better decisions.
          </p>
          <Button 
            size="lg" 
            className="text-white px-8 py-4 minimal-hover minimal-focus shadow-soft"
          >
            Request Access
          </Button>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 shadow-minimal border-0 bg-card">
              <div className="text-title mb-4">Manage</div>
              <p className="text-body opacity-70 leading-relaxed">
                Centralize and organize your data with precision. Built for clarity and control. At any business scale.
              </p>
            </Card>
            
            <Card className="p-8 shadow-minimal border-0 bg-card">
              <div className="text-title mb-4">View</div>
              <p className="text-body opacity-70 leading-relaxed">
                Visualize insights with minimal complexity. See what matters, nothing more. Not another spreadsheet.
              </p>
            </Card>
            
            <Card className="p-8 shadow-minimal border-0 bg-card">
              <div className="text-title mb-4">Interact</div>
              <p className="text-body opacity-70 leading-relaxed">
                Direct engagement with your data. Every interaction purposeful and immediate. See what's happening in real-time.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Visualization Hint */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-title mb-8">
            Better Decisions
          </div>
          <p className="text-body mb-12 max-w-2xl mx-auto opacity-70">
            Transform complex data into clear understanding. For businesses looking to simply understand; When, Where, How, Why!
          </p>
          
          {/* Business Operations Flow */}
          <div className="flex justify-center mb-8">
            <BusinessFlow />
          </div>
          
          <div className="text-small opacity-40 tracking-wide">
            Operations pipeline visualization
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-title mb-4">Technical Foundation</div>
            <p className="text-body opacity-70 max-w-xl mx-auto">
              Built on principles of performance, security, and scalability. Everything that happens in your business is a data point, we help you understand how it all comes together at the "bigger picture" level.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="text-body">Enterprise Security</div>
              <div className="text-body">Real-time Processing</div>
              <div className="text-body">API-first Architecture</div>
            </div>
            <div className="space-y-4 opacity-70">
              <div className="text-body">Cloud Native</div>
              <div className="text-body">Minimal Configuration</div>
              <div className="text-body">Infinite Scale</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-title mb-8">Pilot Pricing</div>
            <p className="text-body mb-12 max-w-2xl mx-auto opacity-70">
              Flexible pricing based on your business scale. No hidden fees. Just clarity and value from day one.
            </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          {/* Small Biz */}
          <Card className="p-6 bg-card shadow-minimal border-0">
            <div className="text-title mb-2">Small Business</div>
                <ul className="space-y-2 text-body opacity-70 leading-relaxed list-disc pl-4">
                  <li>Onboarding assistance</li>
                  <li>Custom data points</li>
                  <li>1–3 stores supported</li>
                  <li>Full provisioning & syncing</li>
                  <li>Email support</li>
                </ul>
          </Card>

          {/* Mid Biz */}
          <Card className="p-6 bg-card shadow-minimal border-0">
            <div className="text-title mb-2">Mid-Sized Business</div>
                <ul className="space-y-2 text-body opacity-70 leading-relaxed list-disc pl-4">
                  <li>Everything in `Small Business`</li>
                  <li>Multi-store architecture</li>
                  <li>Schema version control</li>
                  <li>Priority updates</li>
                  <li>Dedicated technical support</li>
                </ul>
          </Card>

          {/* Enterprise */}
          <Card className="p-6 bg-card shadow-minimal border-0">
            <div className="text-title mb-2">Enterprise(Coming Soon)</div>
                <ul className="space-y-2 text-body opacity-70 leading-relaxed list-disc pl-4">
                  <li>Everything in `Mid-Sized Business`</li>
                  <li>Unlimited stores & users</li>
                  <li>White-labeled deployment</li>
                  <li>On-premise or air-gapped</li>
                  <li>Dedicated support team</li>
                </ul>
          </Card>
        </div>
      </div>
    </section>
      

      {/* Call to Action */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-title mb-8">
            Experience H3IMD3LL
          </div>
          <p className="text-body mb-12 opacity-70">
            Join forward-thinking organizations already transforming their data experience.
          </p>
          <div className="space-y-4">
            <Button 
              size="lg" 
              className="w-full md:w-auto text-white px-12 py-4 minimal-hover minimal-focus shadow-soft"
            >
              Request Early Access
            </Button>
            <div className="text-small opacity-40 tracking-wide">
              Limited beta availability
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
              Built in Kenya
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
