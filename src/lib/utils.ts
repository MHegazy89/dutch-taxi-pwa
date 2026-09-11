import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { DomainType } from '@/types/db';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const DOMAIN_LABELS: Record<DomainType, string> = {
  gordelplicht: 'Gordelplicht & Veiligheid',
  bcdt: 'BCT & CDT Boordcomputer',
  atbv: 'Arbeidstijden & Rust (ATBv)',
  paman: 'PAMAN Ongevallenprotocol',
  transport: 'Soorten Vervoer & Tarieven',
  gedrag: 'Klantgerichtheid & De-escalatie',
  casus: 'CBR Praktijk Casus',
};

export const DOMAIN_COLORS: Record<DomainType, { bg: string; text: string; border: string }> = {
  gordelplicht: {
    bg: 'bg-blue-500/10 dark:bg-blue-950/40',
    text: 'text-blue-600 dark:text-blue-400',
    border: 'border-blue-500/30',
  },
  bcdt: {
    bg: 'bg-purple-500/10 dark:bg-purple-950/40',
    text: 'text-purple-600 dark:text-purple-400',
    border: 'border-purple-500/30',
  },
  atbv: {
    bg: 'bg-orange-500/10 dark:bg-orange-950/40',
    text: 'text-orange-600 dark:text-orange-400',
    border: 'border-orange-500/30',
  },
  paman: {
    bg: 'bg-red-500/10 dark:bg-red-950/40',
    text: 'text-red-600 dark:text-red-400',
    border: 'border-red-500/30',
  },
  transport: {
    bg: 'bg-emerald-500/10 dark:bg-emerald-950/40',
    text: 'text-emerald-600 dark:text-emerald-400',
    border: 'border-emerald-500/30',
  },
  gedrag: {
    bg: 'bg-amber-500/10 dark:bg-amber-950/40',
    text: 'text-amber-600 dark:text-amber-400',
    border: 'border-amber-500/30',
  },
  casus: {
    bg: 'bg-slate-500/10 dark:bg-slate-800/40',
    text: 'text-slate-600 dark:text-slate-300',
    border: 'border-slate-500/30',
  },
};
