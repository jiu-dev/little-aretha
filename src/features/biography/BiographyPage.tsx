import { HeroSection } from './components/HeroSection';
import { ProjectSection } from './components/ProjectSection';
import { ExperienceSection } from './components/ExperienceSection';
import { TeamSection } from './components/TeamSection';
import { QuoteSection } from './components/QuoteSection';

export const BiographyPage = () => {
  return (
    <div>
      <HeroSection />
      <ProjectSection />
      <ExperienceSection />
      <TeamSection />
      <QuoteSection />
    </div>
  );
};
