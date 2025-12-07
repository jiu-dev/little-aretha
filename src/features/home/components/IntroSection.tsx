import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import kimImage from '@/assets/images/kim-aretha.jpg';
import { ImageLightbox } from '@/common/components/ImageLightbox';

export const IntroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-32 bg-brand-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-gold mb-4">
              {t('home.intro.label')}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-brand-cream mb-8 leading-tight">
              {t('home.intro.title1')}
              <br />
              <span className="text-brand-gold">{t('home.intro.title2')}</span>
            </h2>
            <div className="w-16 h-[1px] bg-brand-gold/30 mb-8" />
            <p className="text-brand-cream/60 leading-relaxed mb-6">
              {t('home.intro.description1')}
            </p>
            <p className="text-brand-cream/60 leading-relaxed mb-10">
              {t('home.intro.description2')}
            </p>
            <Link
              to="/biographie"
              className="inline-flex items-center text-brand-gold hover:text-brand-gold-light transition-colors group text-sm uppercase tracking-[0.15em]"
            >
              {t('home.intro.cta')}
              <span className="ml-3 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <ImageLightbox
              src={kimImage}
              alt="Kim, chanteuse de Little Aretha"
              className="aspect-[4/5] overflow-hidden block"
            >
              <img
                src={kimImage}
                alt="Kim, chanteuse de Little Aretha"
                className="w-full h-full object-cover"
              />
            </ImageLightbox>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -left-4 w-full h-full border border-brand-gold/20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
