interface LogoProps {
  variant?: 'default' | 'white';
}

export default function Logo({ variant = 'default' }: LogoProps) {
  const textColor = variant === 'white' ? 'text-white' : 'text-slate-900';
  const accentColor = variant === 'white' ? 'text-sky-400' : 'text-sky-500';

  return (
    <div className="flex items-center gap-2">
      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-lg shadow-sky-500/20">
        <span className="text-lg font-bold text-white">🚐</span>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`text-lg font-bold ${textColor} tracking-tight`}>
          MotorHome<span className={accentColor}>Insurance</span>
        </span>
        <span className={`text-[10px] font-medium ${variant === 'white' ? 'text-slate-400' : 'text-slate-500'} tracking-widest uppercase`}>
          .co.nz
        </span>
      </div>
    </div>
  );
}
