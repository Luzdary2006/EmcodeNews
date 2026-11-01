import {
  SiClickup,
  SiDiscord,
  SiFigma,
  SiFreecodecamp,
  SiGithub,
  SiGoogledrive,
  SiGooglemeet,
  SiJitsi,
  SiNotebooklm,
  SiNotion,
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
  freecodecamp: SiFreecodecamp,
  github: SiGithub,
  "google-meet": SiGooglemeet,
  "jitsi-meet": SiJitsi,
  "google-drive": SiGoogledrive,
  notion: SiNotion,
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
        <img
          src={withBase(tool.logo)}
          alt=""
          width={inner}
          height={inner}
          loading="lazy"
          decoding="async"
          className="h-auto w-auto object-contain"
        />
      )}
    </span>
  );
}
