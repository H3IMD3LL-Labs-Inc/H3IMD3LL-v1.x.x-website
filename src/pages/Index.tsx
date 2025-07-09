import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
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
            H3IMD3LL
          </h1>
          <p className="text-subtitle mb-12 max-w-2xl mx-auto opacity-80">
            A better way for organisations to manage, view and interact with their data to make better decisions.
          </p>
          <Button 
            size="lg" 
            className="text-body px-8 py-4 minimal-hover minimal-focus shadow-soft"
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
                Centralize and organize your data with precision. Built for clarity and control.
              </p>
            </Card>
            
            <Card className="p-8 shadow-minimal border-0 bg-card">
              <div className="text-title mb-4">View</div>
              <p className="text-body opacity-70 leading-relaxed">
                Visualize insights with minimal complexity. See what matters, nothing more.
              </p>
            </Card>
            
            <Card className="p-8 shadow-minimal border-0 bg-card">
              <div className="text-title mb-4">Interact</div>
              <p className="text-body opacity-70 leading-relaxed">
                Direct engagement with your data. Every interaction purposeful and immediate.
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
            Transform complex data into clear understanding. Every element designed to reduce cognitive load and amplify insight.
          </p>
          
          {/* Minimal Data Visualization */}
          <div className="grid grid-cols-5 gap-2 max-w-md mx-auto mb-8">
            {[20, 40, 60, 35, 80].map((height, index) => (
              <div 
                key={index}
                className="bg-primary opacity-20 transition-all duration-300 hover:opacity-60"
                style={{ height: `${height}px` }}
              />
            ))}
          </div>
          
          <div className="text-small opacity-40 tracking-wide">
            Data visualization reimagined
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-title mb-4">Technical Foundation</div>
            <p className="text-body opacity-70 max-w-xl mx-auto">
              Built on principles of performance, security, and scalability. Every line of code serves a purpose.
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
              <div className="text-body">Zero Configuration</div>
              <div className="text-body">Infinite Scale</div>
            </div>
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
              className="w-full md:w-auto text-body px-12 py-4 minimal-hover minimal-focus shadow-soft"
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
              © 2024 H3IMD3LL Labs, Inc.
            </div>
            <div className="text-small opacity-40">
              Designed in California
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;