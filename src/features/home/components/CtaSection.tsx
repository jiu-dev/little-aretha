import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import bgImage from '@/assets/images/la-team-2.jpeg';

export const CtaSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-40 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-brand-darker/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-brand-gold mb-6">
          Booking
        </p>
        <h2 className="text-3xl md:text-4xl font-serif text-brand-cream mb-8 leading-tight">
          {t('home.cta.title1')}
          <br />
          <span className="text-brand-gold">{t('home.cta.title2')}</span> ?
        </h2>
        <div className="w-16 h-[1px] bg-brand-gold/30 mx-auto mb-8" />
        <p className="text-brand-cream/60 mb-12 max-w-2xl mx-auto leading-relaxed">
          {t('home.cta.description')}
        </p>
        <Link
          to="/contact"
          className="inline-block px-10 py-4 bg-brand-gold hover:bg-brand-gold-light text-brand-darker font-medium uppercase tracking-[0.15em] text-sm transition-colors duration-300"
        >
          {t('home.cta.button')}
        </Link>
      </div>
    </section>
  );
};
