import { ImageIcon } from "lucide-react";

type ImagePlaceholderProps = {
  /** What the image will show; read out by screen readers. */
  label: string;
  /** Visible bracketed instruction, e.g. "[Insert final Figma screens]". */
  note?: string;
  /** Tailwind aspect-ratio class. Defaults to a 4:3 landscape frame. */
  aspect?: string;
};

/** Neutral stand-in until real images are added. Never a fake screenshot. */
export function ImagePlaceholder({
  label,
  note = "[Add project image]",
  aspect = "aspect-[4/3]",
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`Image placeholder: ${label}`}
      className={`flex w-full flex-col items-center justify-center gap-2 border border-line bg-subtle px-4 text-center text-muted ${aspect}`}
    >
      <ImageIcon className="h-6 w-6" aria-hidden="true" />
      <span className="text-sm">{note}</span>
    </div>
  );
}
