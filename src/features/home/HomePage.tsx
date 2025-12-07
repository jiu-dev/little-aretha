import { HeroSection } from './components/HeroSection';
import { IntroSection } from './components/IntroSection';
import { GallerySection } from './components/GallerySection';
import { VideoSection } from './components/VideoSection';
import { CtaSection } from './components/CtaSection';

export const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <IntroSection />
      <GallerySection />
      <VideoSection />
      <CtaSection />
    </div>
  );
};
