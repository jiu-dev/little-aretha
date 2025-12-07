import { useTranslation } from 'react-i18next';
import kimImage from '@/assets/images/kim-4.jpg';
import laTeam2 from '@/assets/images/la-team-2.jpeg';
import { ImageLightbox } from '@/common/components/ImageLightbox';

export const TeamSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-32 bg-brand-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-gold mb-4">
              {t('biography.team.label')}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-brand-cream mb-6">
              {t('biography.team.title1')}<span className="text-brand-gold">{t('biography.team.title2')}</span>
            </h2>
            <div className="w-16 h-[1px] bg-brand-gold/30 mb-8" />
            <div className="space-y-6 text-brand-cream/60 leading-relaxed">
              <p>
                {t('biography.team.description1')}{' '}
                <strong className="text-brand-cream">
                  {t('biography.team.highlight1')}
                </strong>
                .
              </p>
              <p>
                {t('biography.team.description2')}{' '}
                <strong className="text-brand-cream">{t('biography.team.highlight2')}</strong>.
              </p>
              <p>
                {t('biography.team.description3')}{' '}
                <strong className="text-brand-cream">
                  {t('biography.team.highlight3')}
                </strong>
                .
              </p>
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <ImageLightbox
              src={kimImage}
              alt="Kim"
              className="aspect-[3/4] overflow-hidden"
            >
              <img
                src={kimImage}
                alt="Kim"
                className="w-full h-full object-cover"
              />
            </ImageLightbox>
            <ImageLightbox
              src={laTeam2}
              alt="L'équipe"
              className="aspect-[3/4] overflow-hidden mt-12"
            >
              <img
                src={laTeam2}
                alt="L'équipe"
                className="w-full h-full object-cover"
              />
            </ImageLightbox>
          </div>
        </div>
      </div>
    </section>
  );
};
