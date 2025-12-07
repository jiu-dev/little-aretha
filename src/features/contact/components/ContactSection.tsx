import { useTranslation } from 'react-i18next';
import { Mail, Phone, Facebook, Instagram } from 'lucide-react';

const socialLinks = [
  {
    icon: Facebook,
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1649HHjZox/',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/littlearethatheband',
  },
];

export const ContactSection = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.info.email'),
      value: 'littlearethaband@gmail.com',
      href: 'mailto:littlearethaband@gmail.com',
    },
    {
      icon: Phone,
      label: t('contact.info.phone'),
      value: '06 70 59 33 32',
      href: 'tel:+33670593332',
    },
  ];

  return (
    <section className="py-32 bg-brand-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact direct */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-gold mb-4">
            {t('contact.direct.label')}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-brand-cream mb-6">
            {t('contact.direct.title')}
          </h2>
          <div className="w-16 h-[1px] bg-brand-gold/30 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.href}
              className="group p-8 bg-brand-darker border border-brand-gold/10 hover:border-brand-gold/30 transition-all duration-500 text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 border border-brand-gold/30 mb-6 mx-auto group-hover:bg-brand-gold/10 transition-colors">
                <info.icon className="w-7 h-7 text-brand-gold" />
              </div>
              <p className="text-brand-cream/50 text-sm uppercase tracking-[0.15em] mb-2">
                {info.label}
              </p>
              <p className="text-xl font-serif text-brand-cream group-hover:text-brand-gold transition-colors">
                {info.value}
              </p>
            </a>
          ))}
        </div>

        {/* Réseaux sociaux */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-gold mb-4">
            {t('contact.social.label')}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-brand-cream mb-6">
            {t('contact.social.title')}
          </h2>
          <div className="w-16 h-[1px] bg-brand-gold/30 mx-auto" />
        </div>

        <div className="flex justify-center gap-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-8 py-5 bg-brand-darker border border-brand-gold/10 hover:border-brand-gold/30 transition-all duration-500"
            >
              <div className="flex items-center justify-center w-12 h-12 border border-brand-gold/30 group-hover:bg-brand-gold/10 transition-colors">
                <social.icon className="w-5 h-5 text-brand-gold" />
              </div>
              <span className="text-lg font-serif text-brand-cream group-hover:text-brand-gold transition-colors">
                {social.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
