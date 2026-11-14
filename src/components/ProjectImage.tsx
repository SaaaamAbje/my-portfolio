import Image from "next/image";
import type { Project } from "@/lib/content";
import { ImagePlaceholder } from "./ImagePlaceholder";

/** Intrinsic size of every project thumbnail (16:10). */
export const PROJECT_IMAGE_WIDTH = 1600;
export const PROJECT_IMAGE_HEIGHT = 1000;

type ProjectImageProps = {
  project: Project;
  /** Responsive sizes hint for the layout this image sits in. */
  sizes: string;
  /** Load early when the image is near the top of the page. */
  preload?: boolean;
};

/**
 * A project's 16:10 thumbnail, or a placeholder until one is added.
 * Width and height are fixed so the page does not shift while it loads.
 */
export function ProjectImage({ project, sizes, preload = false }: ProjectImageProps) {
  if (!project.image) {
    return (
      <div className="transition-transform duration-500 ease-out-soft group-hover:scale-[1.03]">
        <ImagePlaceholder label={project.title} aspect="aspect-[16/10]" />
      </div>
    );
  }
  return (
    <Image
      src={project.image.src}
      alt={project.image.alt}
      width={PROJECT_IMAGE_WIDTH}
      height={PROJECT_IMAGE_HEIGHT}
      sizes={sizes}
      preload={preload}
      className="h-auto w-full border border-line bg-subtle transition-transform duration-500 ease-out-soft group-hover:scale-[1.03]"
    />
  );
}
