import { useTranslation } from 'react-i18next';
import { MemberCard } from './components/MemberCard';

// Images
import heroImage from '@/assets/images/la-team-2.jpeg';
import kimberleyImg from '@/assets/images/actors/Kimberley.jpg';
import nolanImg from '@/assets/images/actors/Nolan.jpg';
import thierryImg from '@/assets/images/actors/Thierry.jpg';
import dylanImg from '@/assets/images/actors/Dylan.jpg';
import vincentImg from '@/assets/images/actors/Vincent.jpg';
import francoisImg from '@/assets/images/actors/François.jpg';
import cuivresImg from '@/assets/images/actors/Cuivres.jpg';
import choeursImg from '@/assets/images/actors/Wumee&Jude-Choeurs.jpg';

const leadVocal = {
  image: kimberleyImg,
  nameKey: 'team.members.kimberly.name',
  roleKey: 'team.members.kimberly.role',
};

const musicians = [
  {
    image: nolanImg,
    nameKey: 'team.members.nolan.name',
    roleKey: 'team.members.nolan.role',
  },
  {
    image: thierryImg,
    nameKey: 'team.members.thierry.name',
    roleKey: 'team.members.thierry.role',
  },
  {
    image: dylanImg,
    nameKey: 'team.members.dylan.name',
    roleKey: 'team.members.dylan.role',
  },
  {
    image: vincentImg,
    nameKey: 'team.members.vincent.name',
    roleKey: 'team.members.vincent.role',
  },
  {
    image: francoisImg,
    nameKey: 'team.members.francois.name',
    roleKey: 'team.members.francois.role',
  },
];

const groups = [
  {
    image: cuivresImg,
    nameKey: 'team.members.brass.name',
    roleKey: 'team.members.brass.role',
  },
  {
    image: choeursImg,
    nameKey: 'team.members.backing.name',
    roleKey: 'team.members.backing.role',
  },
];

export const TeamPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-brand-darker/80 via-brand-darker/60 to-brand-darker" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-gold mb-6">
            {t('team.hero.label')}
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-cream mb-8">
            {t('team.hero.title1')}{' '}
            <span className="text-brand-gold">{t('team.hero.title2')}</span>
          </h1>
          <div className="w-16 h-[1px] bg-brand-gold/50 mx-auto mb-6" />
          <p className="text-lg text-brand-cream/60">{t('team.hero.description')}</p>
        </div>
      </section>

      {/* Lead Vocal Section */}
      <section className="py-20 bg-brand-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-gold mb-4">
              {t('team.leadVocal.label')}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-cream">
              {t('team.leadVocal.title')}
            </h2>
          </div>
          <div className="flex justify-center">
            <MemberCard
              image={leadVocal.image}
              name={t(leadVocal.nameKey)}
              role={t(leadVocal.roleKey)}
              featured
            />
          </div>
        </div>
      </section>

      {/* Musicians Section */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-gold mb-4">
              {t('team.musicians.label')}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-cream">
              {t('team.musicians.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-items-center">
            {musicians.map((member) => (
              <MemberCard
                key={member.nameKey}
                image={member.image}
                name={t(member.nameKey)}
                role={t(member.roleKey)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Brass & Backing Vocals Section */}
      <section className="py-20 bg-brand-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-gold mb-4">
              {t('team.sections.label')}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-cream">
              {t('team.sections.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {groups.map((group) => (
              <MemberCard
                key={group.nameKey}
                image={group.image}
                name={t(group.nameKey)}
                role={t(group.roleKey)}
                large
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
