import { useTranslation } from 'react-i18next';
import heroImage from '@/assets/images/little-aretha-9812.jpg';

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-darker/80 via-brand-darker/60 to-brand-darker" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-brand-gold mb-6">
          {t('biography.hero.label')}
        </p>
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-cream mb-8">
          {t('biography.hero.title1')} <span className="text-brand-gold">{t('biography.hero.title2')}</span>
        </h1>
        <div className="w-16 h-[1px] bg-brand-gold/50 mx-auto mb-6" />
        <p className="text-lg text-brand-cream/60">
          {t('biography.hero.description')}
        </p>
      </div>
    </section>
  );
};
