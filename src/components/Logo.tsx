/**
 * Logo component — uses the actual logo PNG from /public/logo.png
 * Drop the logo file at: ShowStopperDetail/public/logo.png
 * Drop the emblem only at: ShowStopperDetail/public/logo-emblem.png (circular SS badge)
 */

type LogoVariant = 'full' | 'emblem' | 'wordmark';

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  height?: number;
}

export default function Logo({ variant = 'full', className = '', height = 48 }: LogoProps) {
  // Full logo (circle + wordmark together)
  if (variant === 'full') {
    return (
      <img
        src="/images/logo.PNG"
        alt="Show Stopper Detailing"
        height={height}
        style={{ height: `${height}px`, width: 'auto', objectFit: 'contain' }}
        className={className}
      />
    );
  }

  // Emblem only (circular SS badge) — crop from logo or use a separate file
  if (variant === 'emblem') {
    return (
      <img
        src="/images/logo.PNG"
        alt="Show Stopper Detailing"
        height={height}
        style={{ height: `${height}px`, width: `${height}px`, objectFit: 'contain' }}
        className={className}
        onError={(e) => {
          // Fallback to full logo if emblem file not found
          (e.target as HTMLImageElement).src = '/logo.png';
        }}
      />
    );
  }

  // SVG fallback wordmark — used only if logo files aren't present
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center border-2 border-black flex-shrink-0">
        <span className="text-black font-extrabold text-lg leading-none" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          SS
        </span>
      </div>
      <div className="bg-black px-3 py-1" style={{ clipPath: 'polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%)' }}>
        <div className="font-extrabold text-[#D4AF37] text-sm leading-tight tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          SHOW STOPPER
        </div>
        <div className="font-extrabold text-[#D4AF37] text-sm leading-tight tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          DETAILING
        </div>
      </div>
    </div>
  );
}
