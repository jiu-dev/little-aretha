import { useTranslation } from 'react-i18next';
import { ImageLightbox } from '@common/components';
import fatherAndSon from '@/assets/images/father-and-son.jpg';

export const ProjectSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-32 bg-brand-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <ImageLightbox
              src={fatherAndSon}
              alt="Thierry et Nolan Le Gall"
              className="aspect-[4/5] overflow-hidden block"
            >
              <img
                src={fatherAndSon}
                alt="Thierry et Nolan Le Gall"
                className="w-full h-full object-cover"
              />
            </ImageLightbox>
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-brand-gold/20 -z-10" />
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-gold mb-4">
              {t('biography.project.label')}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-brand-cream mb-6">
              {t('biography.project.title1')} <span className="text-brand-gold">{t('biography.project.title2')}</span>
            </h2>
            <div className="w-16 h-[1px] bg-brand-gold/30 mb-8" />
            <div className="space-y-6 text-brand-cream/60 leading-relaxed">
              <p>
                {t('biography.project.description1')}{' '}
                <strong className="text-brand-cream">
                  {t('biography.project.highlight1')}
                </strong>{' '}
                {t('biography.project.description2')}
              </p>
              <p>
                {t('biography.project.description3')}{' '}
                <strong className="text-brand-cream">
                  {t('biography.project.highlight2')}
                </strong>{' '}
                {t('biography.project.description4')}
              </p>
              <p>
                {t('biography.project.description5')}{' '}
                <strong className="text-brand-cream">
                  {t('biography.project.highlight3')}
                </strong>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
