import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/images/groupe-scene.jpg';

export const HeroSection = () => {
  const { t } = useTranslation();

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-darker/70 via-brand-darker/50 to-brand-darker" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-gold mb-6">
          {t('home.hero.subtitle')}
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-brand-cream mb-8 tracking-tight">
          {t('home.hero.title1')} <span className="text-brand-gold">{t('home.hero.title2')}</span>
        </h1>
        <div className="w-24 h-[1px] bg-brand-gold/50 mx-auto mb-8" />
        <p className="text-lg md:text-xl text-brand-cream/70 mb-4 font-light tracking-wide">
          {t('home.hero.description')}
        </p>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brand-cream/40 hover:text-brand-gold transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};
