import { useTranslation } from 'react-i18next';

export const QuoteSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-40 bg-brand-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <blockquote>
          <p className="text-2xl md:text-4xl font-serif text-brand-cream leading-relaxed mb-10 italic">
            « {t('biography.quote.word1')} <span className="text-brand-gold">{t('biography.quote.highlight1')}</span>.
            <br />
            {t('biography.quote.word2')} <span className="text-brand-gold">{t('biography.quote.highlight2')}</span>.
            <br />
            {t('biography.quote.word3')} <span className="text-brand-gold">{t('biography.quote.highlight3')}</span>. »
          </p>
        </blockquote>
        <div className="w-24 h-[1px] bg-brand-gold/50 mx-auto mb-10" />
        <p className="text-brand-cream/50 text-lg leading-relaxed max-w-2xl mx-auto">
          {t('biography.quote.description')}
        </p>
      </div>
    </section>
  );
};
