"use client";

import { Phone, Mail, Clock, MapPin } from "lucide-react";

function InfoChip({
  children,
  icon,
  variant = "dark",
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "dark" | "light";
}) {
  const isDark = variant === "dark";
  const borderColor = isDark ? "border-white/20" : "border-zinc-300";
  const textColor = isDark ? "text-white/70" : "text-zinc-600";

  return (
    <span className={`inline-flex items-center gap-2 rounded-full border ${borderColor} px-3 py-1 text-[11px] tracking-[0.2em] ${textColor}`}>
      {icon}
      {children}
    </span>
  );
}

export function TopBar({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const isDark = variant === "dark";
  const borderColor = isDark ? "border-white/10" : "border-zinc-200";
  const textColor = isDark ? "text-white/70" : "text-zinc-600";
  const textColorSecondary = isDark ? "text-white/80" : "text-zinc-700";

  return (
    <div className={`hidden flex-col gap-2 border-b ${borderColor} pb-4 pt-4 text-xs uppercase tracking-widest ${textColor} md:flex md:flex-row md:items-center md:justify-between`}>
      <div className="flex flex-wrap items-center gap-4">
        <InfoChip icon={<Phone className="h-3 w-3" />} variant={variant}>
          +1 (235) 235-598
        </InfoChip>
        <InfoChip icon={<Mail className="h-3 w-3" />} variant={variant}>
          hello@loomii.com
        </InfoChip>
        <InfoChip icon={<MapPin className="h-3 w-3" />} variant={variant}>
          427 Market Street, Nairobi
        </InfoChip>
      </div>
      <div className={`flex items-center gap-2 ${textColorSecondary}`}>
        <Clock className="h-4 w-4" />
        Open hours - Monday - Sunday - 8:00 AM - 9:00 PM
      </div>
    </div>
  );
}

