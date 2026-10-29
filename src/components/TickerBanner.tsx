import React from 'react';

interface TickerBannerProps {
  text: string;
  repeat?: number;
  reverse?: boolean;
  className?: string;
  textColor?: string;
  borderColor?: string;
  duration?: number;
}

export const TickerBanner: React.FC<TickerBannerProps> = ({
  text,
  repeat = 6,
  reverse = false,
  className = '',
  textColor = 'text-[#EB450E]',
  borderColor = 'border-[#131313]/20',
  duration = 55,
}) => {
  const items = Array.from({ length: repeat }).map((_, i) => (
    <span key={i} className="inline-flex items-center gap-6 px-4 shrink-0">
      <span>{text}</span>
      <span className="text-neutral-400 font-light">/</span>
    </span>
  ));

  return (
    <div
      aria-hidden="true"
      className={`w-full overflow-hidden border-y ${borderColor} bg-[#f7f5ef] py-2.5 select-none relative ${className}`}
    >
      <div
        className={`animate-marquee font-mono-code text-xs sm:text-sm font-bold tracking-[0.25em] uppercase ${textColor} ${
          reverse ? '[animation-direction:reverse]' : ''
        }`}
        style={{
          animationDuration: `${duration}s`,
        }}
      >
        <div className="flex items-center shrink-0">{items}</div>
        <div className="flex items-center shrink-0">{items}</div>
      </div>
    </div>
  );
};
