import { useTranslation } from 'react-i18next';

export const VideoSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-32 bg-brand-darker">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-gold mb-4">
            {t('home.video.label')}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-brand-cream mb-6">
            {t('home.video.title1')} <span className="text-brand-gold">{t('home.video.title2')}</span>
          </h2>
          <div className="w-16 h-[1px] bg-brand-gold/30 mx-auto mb-6" />
          <p className="text-brand-cream/50">
            {t('home.video.description')}
          </p>
        </div>

        {/* Video Placeholder - À remplacer par l'embed YouTube réel */}
        <div className="aspect-video bg-brand-dark overflow-hidden border border-brand-gold/10">
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-brand-cream/30 text-center px-4">
              Vidéo à venir
              <br />
              <span className="text-sm">
                (Embed YouTube de la captation Dourdan)
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
