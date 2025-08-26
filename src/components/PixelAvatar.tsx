import { useState } from 'react';
import pixelAvatar from '@/assets/pixel-avatar.png';

interface PixelAvatarProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const PixelAvatar = ({ size = 'md', className = '' }: PixelAvatarProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  };

  const handleDoubleClick = () => {
    setShowEasterEgg(true);
    setTimeout(() => setShowEasterEgg(false), 2000);
  };

  return (
    <div className={`relative ${className}`}>
      <div
        className={`${sizeClasses[size]} relative cursor-pointer transition-all duration-300 ${
          isHovered ? 'animate-float' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onDoubleClick={handleDoubleClick}
      >
        <img
          src={pixelAvatar}
          alt="Pixel Avatar"
          className={`w-full h-full object-contain transition-all duration-300 ${
            isHovered ? 'scale-110 animate-glow-pulse' : ''
          }`}
          style={{ imageRendering: 'pixelated' }}
        />
        
        {/* Hover effect overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-lg animate-pulse" />
        )}
      </div>

      {/* Easter egg */}
      {showEasterEgg && (
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-card border border-card-border rounded-lg px-3 py-2 animate-slide-up">
          <p className="text-sm font-mono text-primary">Hello there! 👋</p>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
            <div className="border-4 border-transparent border-t-card-border"></div>
          </div>
        </div>
      )}
    </div>
  );
};