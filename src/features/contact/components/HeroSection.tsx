import { useTranslation } from 'react-i18next';

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[40vh] flex items-center justify-center bg-brand-darker overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-brand-gold/10 rotate-45" />
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-brand-gold/10 rotate-12" />

      <div className="relative z-10 text-center px-4">
        <p className="text-xs uppercase tracking-[0.3em] text-brand-gold mb-6">
          {t('contact.hero.label')}
        </p>
        <h1 className="text-4xl md:text-6xl font-serif text-brand-cream mb-6">
          {t('contact.hero.title1')} <span className="text-brand-gold">{t('contact.hero.title2')}</span>
        </h1>
        <div className="w-16 h-[1px] bg-brand-gold/30 mx-auto mb-8" />
        <p className="text-brand-cream/60 max-w-xl mx-auto text-lg">
          {t('contact.hero.description')}
        </p>
      </div>
    </section>
  );
};
