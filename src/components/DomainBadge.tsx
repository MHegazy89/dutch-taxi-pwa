import React from 'react';
import { DomainType } from '@/types/db';
import { DOMAIN_LABELS, DOMAIN_COLORS, cn } from '@/lib/utils';

interface DomainBadgeProps {
  domain: DomainType;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function DomainBadge({ domain, className, size = 'sm' }: DomainBadgeProps) {
  const colors = DOMAIN_COLORS[domain] || DOMAIN_COLORS.transport;
  const label = DOMAIN_LABELS[domain] || domain;

  const sizeClasses = {
    sm: 'text-xs px-2.5 py-0.5',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-1.5 font-medium',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-medium border transition-colors',
        colors.bg,
        colors.text,
        colors.border,
        sizeClasses[size],
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5 opacity-80" />
      {label}
    </span>
  );
}
