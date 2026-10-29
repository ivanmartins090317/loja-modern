import React from 'react';

interface ModernSurfLogoProps {
  variant?: 'orbital-orange' | 'orbital-black' | 'orbital-lime' | 'patch' | 'text-only';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const ModernSurfLogo: React.FC<ModernSurfLogoProps> = ({
  variant = 'orbital-orange',
  className = '',
  size = 'md',
}) => {
  const sizeMap = {
    sm: 'h-6',
    md: 'h-8 sm:h-9',
    lg: 'h-11 sm:h-12',
    xl: 'h-16 sm:h-20',
  };

  if (variant === 'patch') {
    return (
      <div
        className={`inline-flex items-center justify-center bg-[#131313] text-white px-3.5 py-1 border border-neutral-700 tracking-[0.25em] font-bold text-xs uppercase shadow-sm select-none ${className}`}
      >
        <span className="font-sans">MODERN</span>
      </div>
    );
  }

  if (variant === 'orbital-orange') {
    return (
      <img
        src="/assets/crops/modern-laranja.png"
        alt="MODERN.SURF Signal Orange Logo"
        className={`${sizeMap[size]} object-contain mix-blend-multiply ${className}`}
      />
    );
  }

  if (variant === 'orbital-black') {
    return (
      <img
        src="/assets/crops/logo_orbital_black.png"
        alt="MODERN.SURF Modern Black Logo"
        className={`${sizeMap[size]} object-contain mix-blend-multiply ${className}`}
      />
    );
  }

  if (variant === 'orbital-lime') {
    return (
      <img
        src="/assets/crops/logo_orbital_lime.png"
        alt="MODERN.SURF Acid Lime Logo"
        className={`${sizeMap[size]} object-contain mix-blend-multiply ${className}`}
      />
    );
  }

  return (
    <div className={`flex items-center gap-1.5 font-bold uppercase ${className}`}>
      <span className="font-anton tracking-wider text-neutral-900">MODERN</span>
      <span className="text-[#EB450E] font-anton tracking-wider">.SURF</span>
    </div>
  );
};
