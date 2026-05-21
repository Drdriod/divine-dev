import { ArrowRight, CheckCircle2, Code2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter">
            Divine<span className="text-cyan-400">.</span>
          </div>
          <div className="flex gap-8 items-center">
            <a href="#work" className="text-sm font-medium hover:text-cyan-400 transition">
              Work
            </a>
            <a href="#about" className="text-sm font-medium hover:text-cyan-400 transition">
              About
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-cyan-400 transition">
              Contact
            </a>
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold rounded-full px-6">
              Hire Me
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Gradient background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
              Available for Remote Projects
            </div>

            <h1 className="text-6xl lg:text-7xl font-black leading-tight tracking-tighter">
              Ship AI Products
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                In Half the Time
              </span>
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed max-w-md">
              I build production-ready AI systems that scale. No prototypes. No delays. Just shipped products that work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold px-8 py-6 text-lg rounded-lg flex items-center gap-2">
                Start a Project <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-slate-600 hover:bg-slate-800 px-8 py-6 text-lg rounded-lg">
                See My Work
              </Button>
            </div>

            {/* Social Proof */}
            <div className="pt-8 border-t border-slate-800 space-y-4">
              <p className="text-sm text-slate-400 font-semibold">TRUSTED BY</p>
              <div className="flex gap-4 flex-wrap">
                <div className="text-sm">
                  <p className="font-bold text-cyan-400">3+</p>
                  <p className="text-slate-400">Production Apps</p>
                </div>
                <div className="text-sm">
                  <p className="font-bold text-cyan-400">6 months</p>
                  <p className="text-slate-400">Avg Delivery</p>
                </div>
                <div className="text-sm">
                  <p className="font-bold text-cyan-400">100%</p>
                  <p className="text-slate-400">On-Time Delivery</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative hidden lg:block">
            <div className="aspect-square bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl border border-slate-700 backdrop-blur-sm p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="h-3 bg-slate-700 rounded-full w-3/4"></div>
                <div className="h-3 bg-slate-700 rounded-full w-1/2"></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                  <Code2 className="w-6 h-6 text-cyan-400 mb-2" />
                  <p className="text-xs text-slate-400">React</p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                  <Zap className="w-6 h-6 text-cyan-400 mb-2" />
                  <p className="text-xs text-slate-400">AI/ML</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disqualification Section */}
      <section className="py-16 px-6 bg-slate-800/30 border-y border-slate-800">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-slate-300">
            <span className="font-bold text-cyan-400">Not a fit if:</span> You're looking for cheap, slow, or low-quality work. I only take projects where speed and quality matter.
          </p>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-cyan-400 font-bold text-sm tracking-widest mb-4">SELECTED WORK</p>
            <h2 className="text-5xl lg:text-6xl font-black">
              Products I Built
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                From Scratch
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {/* Project 1 */}
            <div className="group bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-8">
                <div className="lg:col-span-2 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 border border-green-500/50 rounded-full text-xs font-bold text-green-400">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    LIVE
                  </div>
                  <h3 className="text-3xl font-black">DealMatch</h3>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    AI-powered real estate matching platform that connects buyers with properties in seconds. Built with React, Node.js, and machine learning algorithms.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    <span className="px-3 py-1 bg-slate-700/50 border border-slate-600 rounded-full text-xs font-medium text-slate-300">React</span>
                    <span className="px-3 py-1 bg-slate-700/50 border border-slate-600 rounded-full text-xs font-medium text-slate-300">Node.js</span>
                    <span className="px-3 py-1 bg-slate-700/50 border border-slate-600 rounded-full text-xs font-medium text-slate-300">ML</span>
                    <span className="px-3 py-1 bg-slate-700/50 border border-slate-600 rounded-full text-xs font-medium text-slate-300">Supabase</span>
                  </div>
                  <div className="pt-6 space-y-2">
                    <p className="text-sm text-slate-400">
                      <span className="font-bold text-cyan-400">3 months</span> from concept to launch
                    </p>
                    <p className="text-sm text-slate-400">
                      <span className="font-bold text-cyan-400">500+</span> active users in first month
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-full aspect-square bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg border border-slate-700 flex items-center justify-center group-hover:border-cyan-500/50 transition-all">
                    <ArrowRight className="w-8 h-8 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-8">
                <div className="lg:col-span-2 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/20 border border-yellow-500/50 rounded-full text-xs font-bold text-yellow-400">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                    IN PROGRESS
                  </div>
                  <h3 className="text-3xl font-black">FinFlow</h3>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    Fintech platform automating cash flow management for SMEs. Real-time analytics, predictive forecasting, and automated reconciliation.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    <span className="px-3 py-1 bg-slate-700/50 border border-slate-600 rounded-full text-xs font-medium text-slate-300">React</span>
                    <span className="px-3 py-1 bg-slate-700/50 border border-slate-600 rounded-full text-xs font-medium text-slate-300">Python</span>
                    <span className="px-3 py-1 bg-slate-700/50 border border-slate-600 rounded-full text-xs font-medium text-slate-300">PostgreSQL</span>
                    <span className="px-3 py-1 bg-slate-700/50 border border-slate-600 rounded-full text-xs font-medium text-slate-300">FastAPI</span>
                  </div>
                  <div className="pt-6 space-y-2">
                    <p className="text-sm text-slate-400">
                      <span className="font-bold text-cyan-400">6 months</span> estimated to full launch
                    </p>
                    <p className="text-sm text-slate-400">
                      <span className="font-bold text-cyan-400">Beta</span> with 50+ early users
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-full aspect-square bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg border border-slate-700 flex items-center justify-center group-hover:border-cyan-500/50 transition-all">
                    <ArrowRight className="w-8 h-8 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-8">
                <div className="lg:col-span-2 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 border border-blue-500/50 rounded-full text-xs font-bold text-blue-400">
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                    SHIPPED
                  </div>
                  <h3 className="text-3xl font-black">ContentAI</h3>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    AI-powered content generation platform for creators. Generates, optimizes, and schedules social media content using advanced NLP models.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    <span className="px-3 py-1 bg-slate-700/50 border border-slate-600 rounded-full text-xs font-medium text-slate-300">Next.js</span>
                    <span className="px-3 py-1 bg-slate-700/50 border border-slate-600 rounded-full text-xs font-medium text-slate-300">OpenAI API</span>
                    <span className="px-3 py-1 bg-slate-700/50 border border-slate-600 rounded-full text-xs font-medium text-slate-300">Stripe</span>
                    <span className="px-3 py-1 bg-slate-700/50 border border-slate-600 rounded-full text-xs font-medium text-slate-300">MongoDB</span>
                  </div>
                  <div className="pt-6 space-y-2">
                    <p className="text-sm text-slate-400">
                      <span className="font-bold text-cyan-400">4 months</span> from design to production
                    </p>
                    <p className="text-sm text-slate-400">
                      <span className="font-bold text-cyan-400">$50k+</span> MRR within first quarter
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-full aspect-square bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg border border-slate-700 flex items-center justify-center group-hover:border-cyan-500/50 transition-all">
                    <ArrowRight className="w-8 h-8 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-slate-800/30 border-y border-slate-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-cyan-400 font-bold text-sm tracking-widest mb-4">ABOUT</p>
            <h2 className="text-5xl lg:text-6xl font-black mb-8">
              I Build
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Shipped Products
              </span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              I'm an AI Product Engineer obsessed with shipping fast, high-quality systems. I combine full-stack development with AI/ML expertise to build products that actually work.
            </p>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-lg">Full-Stack AI Development</p>
                  <p className="text-slate-400">React, Node.js, Python, ML models</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-lg">Production-Ready Systems</p>
                  <p className="text-slate-400">Scalable, tested, deployed</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-lg">Fast Turnaround</p>
                  <p className="text-slate-400">3-6 months from concept to launch</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
              <p className="text-sm text-slate-400 font-bold mb-2">TECH STACK</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-sm font-medium text-cyan-300">React</span>
                <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-sm font-medium text-cyan-300">Node.js</span>
                <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-sm font-medium text-cyan-300">Python</span>
                <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-sm font-medium text-cyan-300">FastAPI</span>
                <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-sm font-medium text-cyan-300">PostgreSQL</span>
                <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-sm font-medium text-cyan-300">Supabase</span>
                <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-sm font-medium text-cyan-300">OpenAI</span>
                <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-sm font-medium text-cyan-300">ML/AI</span>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
              <p className="text-sm text-slate-400 font-bold mb-4">EXPERIENCE</p>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-lg">3+ Years</p>
                  <p className="text-slate-400">Full-Stack Development</p>
                </div>
                <div>
                  <p className="font-bold text-lg">5+ Products</p>
                  <p className="text-slate-400">Shipped to Production</p>
                </div>
                <div>
                  <p className="font-bold text-lg">100% Remote</p>
                  <p className="text-slate-400">Available Worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl lg:text-6xl font-black">
            Ready to Ship?
          </h2>
          <p className="text-xl text-slate-300">
            Let's build something that matters. No lengthy discovery calls. Just straight talk about your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold px-8 py-6 text-lg rounded-lg">
              Start a Project
            </Button>
            <Button variant="outline" className="border-slate-600 hover:bg-slate-800 px-8 py-6 text-lg rounded-lg">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-slate-800/30 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <p className="text-cyan-400 font-bold text-sm tracking-widest mb-8">CONTACT</p>
          <h2 className="text-4xl font-black mb-12">Let's Talk</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="mailto:divine@example.com" className="group bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all">
              <p className="text-sm text-slate-400 font-bold mb-2">EMAIL</p>
              <p className="text-lg font-bold group-hover:text-cyan-400 transition">divine@example.com</p>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="group bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all">
              <p className="text-sm text-slate-400 font-bold mb-2">TWITTER</p>
              <p className="text-lg font-bold group-hover:text-cyan-400 transition">@divine_bassey</p>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all">
              <p className="text-sm text-slate-400 font-bold mb-2">LINKEDIN</p>
              <p className="text-lg font-bold group-hover:text-cyan-400 transition">Divine Bassey</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <p className="text-slate-500 text-sm">© 2026 Divine Bassey. All rights reserved.</p>
          <p className="text-slate-500 text-sm">Built with React & Tailwind</p>
        </div>
      </footer>
    </div>
  );
}
