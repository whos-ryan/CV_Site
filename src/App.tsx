import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Features } from './components/Features';
import { Stats } from './components/Stats';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors">
        <Navigation />
        <Hero />
        <Projects />
        <Features />
        <Stats />
        <CTA />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
