import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/images/logo.png';

const navLinks = [
  { path: '/', labelKey: 'nav.home' },
  { path: '/biographie', labelKey: 'nav.biography' },
  { path: '/equipe', labelKey: 'nav.team' },
  { path: '/technique', labelKey: 'nav.technical' },
  { path: '/contact', labelKey: 'nav.contact' },
];

export const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-darker/95 border-b border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Little Aretha" className="h-14 w-auto" />
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm uppercase tracking-[0.2em] transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'text-brand-gold'
                    : 'text-brand-cream/70 hover:text-brand-gold'
                }`}
              >
                {t(link.labelKey)}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-brand-cream/70 hover:text-brand-gold transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation Mobile */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-brand-gold/10">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm uppercase tracking-[0.2em] transition-colors duration-300 ${
                    isActive(link.path)
                      ? 'text-brand-gold'
                      : 'text-brand-cream/70 hover:text-brand-gold'
                  }`}
                >
                  {t(link.labelKey)}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
