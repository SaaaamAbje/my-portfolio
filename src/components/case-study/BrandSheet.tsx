import Image from "next/image";

/*
  A project's brand at a glance: logo, colour palette, typefaces and an
  example of the brand in use. Shows the project's own identity inside the
  case study without changing the portfolio's colours.
*/

type BrandImage = { src: string; alt: string; width: number; height: number };

export type BrandColor = {
  name: string;
  /** Hex value, e.g. "#008625". */
  hex: string;
  /** Where the colour is used. */
  usage: string;
};

type BrandSheetProps = {
  logo: BrandImage;
  colors: BrandColor[];
  /** Typeface per role; use a [bracketed] placeholder until known. */
  typefaces: { role: string; name: string }[];
  /** A real screen or screenshot showing the brand in use. */
  inUse?: BrandImage & { caption: string };
};

function Label({ children }: { children: string }) {
  return <h4 className="text-sm font-medium text-ink">{children}</h4>;
}

export function BrandSheet({ logo, colors, typefaces, inUse }: BrandSheetProps) {
  return (
    <div className="space-y-10 border-t border-line pt-8">
      <div>
        <Label>Logo</Label>
        <Image
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          sizes="(min-width: 1024px) 672px, 100vw"
          className="mt-4 h-auto w-full border border-line"
        />
      </div>

      <div>
        <Label>Colour palette</Label>
        <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3">
          {colors.map((color) => (
            <li key={color.hex}>
              <div
                className="aspect-[4/3] w-full border border-line"
                style={{ backgroundColor: color.hex }}
                aria-hidden="true"
              />
              <p className="mt-3 text-base font-medium text-ink">{color.name}</p>
              <p className="text-sm uppercase tabular-nums text-muted">{color.hex}</p>
              <p className="mt-1 text-sm text-muted">{color.usage}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Label>Typography</Label>
        <dl className="mt-4 divide-y divide-line border-y border-line text-base">
          {typefaces.map((typeface) => (
            <div key={typeface.role} className="flex gap-6 py-3">
              <dt className="w-28 shrink-0 text-sm text-muted">{typeface.role}</dt>
              <dd className="text-ink">{typeface.name}</dd>
            </div>
          ))}
        </dl>
      </div>

      {inUse && (
        <figure>
          <Label>In the app</Label>
          <Image
            src={inUse.src}
            alt={inUse.alt}
            width={inUse.width}
            height={inUse.height}
            sizes="(min-width: 640px) 366px, 100vw"
            className="mt-4 h-auto w-full max-w-sm border border-line"
          />
          <figcaption className="mt-3 text-sm text-muted">{inUse.caption}</figcaption>
        </figure>
      )}
    </div>
  );
}
