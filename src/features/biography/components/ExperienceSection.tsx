import { useTranslation } from 'react-i18next';
import { Users, BookOpen, Monitor } from 'lucide-react';

export const ExperienceSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Users,
      title: t('biography.experience.feature1Title'),
      description: t('biography.experience.feature1Description'),
    },
    {
      icon: BookOpen,
      title: t('biography.experience.feature2Title'),
      description: t('biography.experience.feature2Description'),
    },
    {
      icon: Monitor,
      title: t('biography.experience.feature3Title'),
      description: t('biography.experience.feature3Description'),
    },
  ];

  return (
    <section className="py-32 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-gold mb-4">
            {t('biography.experience.label')}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-brand-cream mb-6">
            {t('biography.experience.title1')}<span className="text-brand-gold">{t('biography.experience.title2')}</span>
          </h2>
          <div className="w-16 h-[1px] bg-brand-gold/30 mx-auto mb-6" />
          <p className="text-brand-cream/50 max-w-2xl mx-auto">
            {t('biography.experience.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-brand-darker/50 border border-brand-gold/10 p-10 text-center hover:border-brand-gold/30 transition-colors duration-500"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 border border-brand-gold/30 mb-8">
                <feature.icon className="w-7 h-7 text-brand-gold" />
              </div>
              <h3 className="text-lg font-serif text-brand-cream mb-4">
                {feature.title}
              </h3>
              <p className="text-brand-cream/50 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
