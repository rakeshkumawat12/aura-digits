interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  color: 'purple' | 'blue' | 'gold';
}

const colorClasses = {
  purple: 'from-primary/20 to-primary/5 hover:shadow-primary/20',
  blue: 'from-secondary/20 to-secondary/5 hover:shadow-secondary/20',
  gold: 'from-accent-gold/20 to-accent-gold/5 hover:shadow-accent-gold/20',
};

const iconColorClasses = {
  purple: 'bg-gradient-to-r from-primary to-primary-light',
  blue: 'bg-gradient-to-r from-secondary to-secondary-light',
  gold: 'bg-gradient-to-r from-accent-gold to-accent-rose',
};

export function FeatureCard({
  icon,
  title,
  description,
  color,
}: FeatureCardProps) {
  return (
    <div className={`glass rounded-2xl p-5 sm:p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl bg-gradient-to-br ${colorClasses[color]}`}>
      <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6 ${iconColorClasses[color]}`}>
        <span className="text-2xl sm:text-3xl">{icon}</span>
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">{title}</h3>
      <p className="text-sm sm:text-base text-white/70 leading-relaxed">{description}</p>
    </div>
  );
}
