interface LogoProps {
  variant?: 'default' | 'white';
  size?: 'default' | 'sm';
}

export default function Logo({ variant = 'default', size = 'default' }: LogoProps) {
  const textColor = variant === 'white' ? 'text-white' : 'text-slate-900';
  const accentColor = variant === 'white' ? 'text-sky-400' : 'text-sky-500';
  const iconSize = size === 'sm' ? 'w-7 h-7' : 'w-9 h-9';
  const textSize = size === 'sm' ? 'text-sm' : 'text-lg';
  const subSize = size === 'sm' ? 'text-[9px]' : 'text-[10px]';

  return (
    <div className="flex items-center gap-2">
      <div className={`${iconSize} rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-lg shadow-sky-500/20 flex-shrink-0`}>
        <span className={`${size === 'sm' ? 'text-sm' : 'text-lg'} font-bold text-white`}>🚐</span>
      </div>
      <div className="flex flex-col leading-none min-w-0">
        <span className={`${textSize} font-bold ${textColor} tracking-tight whitespace-nowrap`}>
          MotorHome<span className={accentColor}>Insurance</span>
        </span>
        <span className={`${subSize} font-medium ${variant === 'white' ? 'text-slate-400' : 'text-slate-500'} tracking-widest uppercase`}>
          .co.nz
        </span>
      </div>
    </div>
  );
}
