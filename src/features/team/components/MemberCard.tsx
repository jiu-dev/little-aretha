interface MemberCardProps {
  image: string;
  name: string;
  role: string;
  featured?: boolean;
  large?: boolean;
}

export const MemberCard = ({ image, name, role, featured, large }: MemberCardProps) => {
  const cardClass = featured
    ? 'w-full max-w-md'
    : large
      ? 'w-full'
      : 'w-full max-w-xs';

  const imageClass = featured
    ? 'aspect-[3/4]'
    : large
      ? 'aspect-[4/3]'
      : 'aspect-[3/4]';

  return (
    <div className={`group ${cardClass}`}>
      <div
        className={`relative overflow-hidden rounded-lg ${imageClass} bg-brand-dark`}
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/90 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-serif font-bold text-brand-cream mb-1">{name}</h3>
          <p className="text-sm text-brand-gold">{role}</p>
        </div>
      </div>
    </div>
  );
};
