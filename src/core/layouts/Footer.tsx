import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Facebook, Instagram } from 'lucide-react';
import { LanguageSwitcher } from '@common/components';
import logo from '@/assets/images/logo.png';

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-darker border-t border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div>
            <img src={logo} alt="Little Aretha" className="h-16 w-auto mb-6" />
            <p className="text-brand-cream/50 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-brand-gold mb-6">
              {t('footer.navigation')}
            </h4>
            <nav className="flex flex-col space-y-3">
              <Link
                to="/"
                className="text-brand-cream/50 hover:text-brand-gold transition-colors text-sm"
              >
                {t('nav.home')}
              </Link>
              <Link
                to="/biographie"
                className="text-brand-cream/50 hover:text-brand-gold transition-colors text-sm"
              >
                {t('nav.biography')}
              </Link>
              <Link
                to="/technique"
                className="text-brand-cream/50 hover:text-brand-gold transition-colors text-sm"
              >
                {t('nav.technical')}
              </Link>
              <Link
                to="/contact"
                className="text-brand-cream/50 hover:text-brand-gold transition-colors text-sm"
              >
                {t('nav.contact')}
              </Link>
            </nav>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-brand-gold mb-6">
              {t('footer.followUs')}
            </h4>
            <div className="flex space-x-5 mb-8">
              <a
                href="https://www.facebook.com/share/1649HHjZox/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-cream/50 hover:text-brand-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/littlearethatheband"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-cream/50 hover:text-brand-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
            <p className="text-brand-cream/50 text-sm">
              {t('footer.contact')} :
              <br />
              <a
                href="mailto:littlearethaband@gmail.com"
                className="text-brand-gold hover:text-brand-gold-light transition-colors"
              >
                littlearethaband@gmail.com
              </a>
            </p>
          </div>

          {/* Language Switcher */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-brand-gold mb-6">
              {t('footer.language')}
            </h4>
            <LanguageSwitcher />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-brand-gold/10 text-center">
          <p className="text-brand-cream/30 text-sm">
            {t('footer.copyright', { year: currentYear })}
          </p>
        </div>
      </div>
    </footer>
  );
};
