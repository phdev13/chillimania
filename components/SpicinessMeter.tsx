import React from 'react';
import { Flame } from 'lucide-react';
import { HeatLevel } from '../types';

interface SpicinessMeterProps {
  level: HeatLevel;
  showLabel?: boolean;
}

export const SpicinessMeter: React.FC<SpicinessMeterProps> = ({ level, showLabel = true }) => {
  const maxLevel = 5;
  
  const getLabel = (lvl: HeatLevel) => {
    switch(lvl) {
      case HeatLevel.MILD: return 'Leve';
      case HeatLevel.MEDIUM: return 'Médio';
      case HeatLevel.HOT: return 'Quente';
      case HeatLevel.EXTREME: return 'Extremo';
      case HeatLevel.INFERNAL: return 'Infernal';
      default: return '';
    }
  };

  const getColor = (index: number) => {
    if (index >= level) return 'text-gray-700';
    if (level === HeatLevel.MILD) return 'text-green-500';
    if (level === HeatLevel.MEDIUM) return 'text-brand-yellow';
    if (level === HeatLevel.HOT) return 'text-brand-orange';
    return 'text-brand-red';
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        {Array.from({ length: maxLevel }).map((_, i) => (
          <Flame 
            key={i} 
            size={18} 
            className={`${getColor(i)} ${i < level && level >= HeatLevel.EXTREME ? 'animate-pulse' : ''} fill-current`} 
          />
        ))}
      </div>
      {showLabel && (
        <span className={`text-sm font-medium font-display uppercase tracking-wider ${getColor(level - 1)}`}>
          {getLabel(level)}
        </span>
      )}
    </div>
  );
};