import { Hero } from '../components/Hero';
import { Projects } from '../components/Projects';
import { Features } from '../components/Features';
import { Stats } from '../components/Stats';
import { CTA } from '../components/CTA';

export function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Stats />
      <Projects />
      <CTA />
    </>
  );
}
