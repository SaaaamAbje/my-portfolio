import { ImageIcon } from "lucide-react";

/** Neutral stand-in until real project images are added. */
export function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div
      role="img"
      aria-label={`Image placeholder for ${label}`}
      className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-2 border border-line bg-subtle text-muted"
    >
      <ImageIcon className="h-6 w-6" aria-hidden="true" />
      <span className="text-xs">[Add project image]</span>
    </div>
  );
}
