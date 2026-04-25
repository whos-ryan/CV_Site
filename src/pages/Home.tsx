import { Hero } from '../components/Hero';
import { Projects } from '../components/Projects';
import { Features } from '../components/Features';
import { CTA } from '../components/CTA';

export function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Features />
      <CTA />
    </>
  );
}
