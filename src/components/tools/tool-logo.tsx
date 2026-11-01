import Image from "next/image";
import {
  SiClickup,
  SiDiscord,
  SiFigma,
  SiGoogledrive,
  SiGooglemeet,
  SiJitsi,
  SiNotebooklm,
  SiObsidian,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { cn } from "@/lib/cn";
import { withBase } from "@/lib/with-base";
import type { Tool } from "@/types/content";

interface ToolLogoProps {
  tool: Tool;
  size?: number;
  className?: string;
}

const brandIcons: Partial<Record<Tool["slug"], IconType>> = {
  obsidian: SiObsidian,
  notebooklm: SiNotebooklm,
  discord: SiDiscord,
  clickup: SiClickup,
  figma: SiFigma,
  "google-meet": SiGooglemeet,
  "jitsi-meet": SiJitsi,
  "google-drive": SiGoogledrive,
};

export function ToolLogo({ tool, size = 48, className }: ToolLogoProps) {
  const inner = Math.round(size * 0.48);
  const BrandIcon = brandIcons[tool.slug];

  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex shrink-0 items-center justify-center rounded-lg border border-line bg-surface",
        className,
      )}
      style={{ width: size, height: size }}
    >
      {BrandIcon ? (
        <BrandIcon
          aria-hidden="true"
          focusable="false"
          size={inner}
          color="#000000"
        />
      ) : (
        <Image
          src={withBase(tool.logo)}
          alt=""
          width={inner}
          height={inner}
          unoptimized
          className="h-auto w-auto"
        />
      )}
    </span>
  );
}
