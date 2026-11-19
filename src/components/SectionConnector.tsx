'use client';

import React from 'react';
import { Cpu, Layers, Server, Mail, Activity, Sparkles, LucideIcon } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export type SectionIconType = 'cpu' | 'layers' | 'server' | 'mail' | 'activity' | 'sparkles';

const iconMap: Record<SectionIconType, LucideIcon> = {
  cpu: Cpu,
  layers: Layers,
  server: Server,
  mail: Mail,
  activity: Activity,
  sparkles: Sparkles,
};

interface SectionConnectorProps {
  nodeNumber: string;
  label: string;
  sublabel?: string;
  iconName?: SectionIconType;
  variant?: 'orange' | 'cyan' | 'amber';
}

export function SectionConnector({
  nodeNumber,
  label,
  sublabel,
  iconName = 'cpu',
  variant = 'orange',
}: SectionConnectorProps) {
  const Icon = iconMap[iconName] || Cpu;
  const isCyan = variant === 'cyan';
  const isAmber = variant === 'amber';

  const badgeBorder = isCyan
    ? 'border-cyan-500/30'
    : isAmber
    ? 'border-amber-500/30'
    : 'border-orange-500/30';

  const badgeBg = isCyan
    ? 'bg-cyan-950/40 text-cyan-400'
    : isAmber
    ? 'bg-amber-950/40 text-amber-400'
    : 'bg-orange-950/40 text-orange-400';

  const pingColor = isCyan
    ? 'bg-cyan-400'
    : isAmber
    ? 'bg-amber-400'
    : 'bg-orange-400';

  const lineColor = isCyan
    ? 'from-cyan-500/0 via-cyan-500/40 to-cyan-500/0'
    : isAmber
    ? 'from-amber-500/0 via-amber-500/40 to-amber-500/0'
    : 'from-orange-500/0 via-orange-500/40 to-orange-500/0';

  return (
    <div className="relative py-8 sm:py-12 flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden">
      {/* Top vertical circuit line */}
      <div className={`w-[2px] h-10 sm:h-14 bg-gradient-to-b ${lineColor} relative`}>
        <div className="circuit-pulse-beam" />
      </div>

      {/* Central Cyber Node Badge */}
      <ScrollReveal animation="scale-up" threshold={0.3} className="pointer-events-auto">
        <div
          className={`flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border ${badgeBorder} ${badgeBg} glass-panel shadow-lg shadow-black/20 text-xs font-mono uppercase tracking-wider backdrop-blur-xl transition-transform hover:scale-105`}
        >
          {/* Signal Indicator Ping */}
          <span className="relative flex h-2 w-2">
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${pingColor}`}
            />
            <span
              className={`relative inline-flex rounded-full h-2 w-2 ${pingColor}`}
            />
          </span>

          {/* Node Number */}
          <span className="font-bold opacity-80">{nodeNumber}</span>
          <span className="opacity-40">•</span>

          {/* Icon */}
          <Icon className="w-3.5 h-3.5 shrink-0" />

          {/* Label */}
          <span className="font-semibold text-slate-900 dark:text-slate-100">{label}</span>

          {sublabel && (
            <>
              <span className="hidden sm:inline opacity-40">•</span>
              <span className="hidden sm:inline text-[10px] text-slate-600 dark:text-slate-400 font-sans normal-case">
                {sublabel}
              </span>
            </>
          )}
        </div>
      </ScrollReveal>

      {/* Bottom vertical circuit line */}
      <div className={`w-[2px] h-10 sm:h-14 bg-gradient-to-b ${lineColor} relative`}>
        <div className="circuit-pulse-beam" style={{ animationDelay: '1.4s' }} />
      </div>
    </div>
  );
}
