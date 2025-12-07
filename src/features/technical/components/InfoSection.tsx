import { useTranslation } from 'react-i18next';
import { Clock, Users, Maximize, Mail } from 'lucide-react';

export const InfoSection = () => {
  const { t } = useTranslation();

  const infos = [
    {
      icon: Clock,
      label: t('technical.info.duration.label'),
      value: t('technical.info.duration.value'),
    },
    {
      icon: Users,
      label: t('technical.info.formation.label'),
      value: t('technical.info.formation.value'),
    },
    {
      icon: Maximize,
      label: t('technical.info.stage.label'),
      value: t('technical.info.stage.value'),
    },
  ];

  return (
    <section className="py-32 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-gold mb-4">
            {t('technical.info.label')}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-brand-cream mb-6">
            {t('technical.info.title1')} <span className="text-brand-gold">{t('technical.info.title2')}</span>
          </h2>
          <div className="w-16 h-[1px] bg-brand-gold/30 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {infos.map((info, index) => (
            <div
              key={index}
              className="text-center p-8 border border-brand-gold/10"
            >
              <div className="flex items-center justify-center w-14 h-14 border border-brand-gold/30 mb-6 mx-auto">
                <info.icon className="w-6 h-6 text-brand-gold" />
              </div>
              <p className="text-brand-cream/50 text-sm uppercase tracking-[0.15em] mb-2">
                {info.label}
              </p>
              <p className="text-2xl font-serif text-brand-cream">
                {info.value}
              </p>
            </div>
          ))}
        </div>

        {/* Contact technique */}
        <div className="text-center p-10 border border-brand-gold/20 bg-brand-darker/50 max-w-2xl mx-auto">
          <div className="flex items-center justify-center w-14 h-14 border border-brand-gold/30 mb-6 mx-auto">
            <Mail className="w-6 h-6 text-brand-gold" />
          </div>
          <h3 className="text-xl font-serif text-brand-cream mb-4">
            {t('technical.info.contact.title')}
          </h3>
          <p className="text-brand-cream/50 mb-6">
            {t('technical.info.contact.description')}
          </p>
          <a
            href="mailto:littlearethaband@gmail.com"
            className="text-brand-gold hover:text-brand-gold-light transition-colors"
          >
            littlearethaband@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};
