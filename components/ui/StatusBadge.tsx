import { CheckCircle2, Hammer, KeyRound } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProjectStatus } from "@/data/projects";

interface StatusBadgeProps {
  status: ProjectStatus;
  className?: string;
}

const STATUS_CONFIG: Record<ProjectStatus, { label: string; Icon: typeof CheckCircle2 }> = {
  "ready-to-move": { label: "Ready to Move", Icon: KeyRound },
  completed: { label: "Completed", Icon: CheckCircle2 },
  "under-construction": { label: "Under Construction", Icon: Hammer },
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const { label, Icon } = STATUS_CONFIG[status];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md border border-white/20 shadow-lg",
        className
      )}
    >
      <Icon className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
      {label}
    </span>
  );
}
