import { useTranslation } from 'react-i18next';
import cuivresImage from '@/assets/images/cuivres.jpg';
import kimChoeurs from '@/assets/images/kim-avec-choeurs.jpg';
import laTeam from '@/assets/images/la-team.jpeg';
import { ImageLightbox } from '@/common/components/ImageLightbox';

const images = [
  { src: cuivresImage, alt: 'Section cuivres' },
  { src: kimChoeurs, alt: 'Kim avec les choristes' },
  { src: laTeam, alt: "L'équipe Little Aretha" },
];

export const GallerySection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-32 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-gold mb-4">
            {t('home.gallery.label')}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-brand-cream mb-6">
            {t('home.gallery.title1')} <span className="text-brand-gold">{t('home.gallery.title2')}</span>
          </h2>
          <div className="w-16 h-[1px] bg-brand-gold/30 mx-auto mb-6" />
          <p className="text-brand-cream/50 max-w-2xl mx-auto">
            {t('home.gallery.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <ImageLightbox
              key={index}
              src={image.src}
              alt={image.alt}
              className="aspect-[4/3] overflow-hidden group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </ImageLightbox>
          ))}
        </div>
      </div>
    </section>
  );
};
