import Image from "next/image";
import { cn } from "@/lib/cn";
import { withBase } from "@/lib/with-base";
import type { Tool } from "@/types/content";

interface ToolLogoProps {
  tool: Tool;
  size?: number;
  className?: string;
}

export function ToolLogo({ tool, size = 48, className }: ToolLogoProps) {
  const inner = Math.round(size * 0.48);

  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex shrink-0 items-center justify-center rounded-lg border border-line bg-surface",
        className,
      )}
      style={{ width: size, height: size }}
    >
      <Image
        src={withBase(tool.logo)}
        alt=""
        width={inner}
        height={inner}
        unoptimized
        className="h-auto w-auto"
      />
    </span>
  );
}
