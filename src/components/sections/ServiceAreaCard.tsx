import Image from "next/image";
import Link from "next/link";
import type { ServiceArea } from "@/types";

type Props = {
  area: ServiceArea;
};

export function ServiceAreaCard({ area }: Props) {
  return (
    <Link
      href={`/service-areas/${area.slug}`}
      className="group relative block overflow-hidden rounded-2xl border border-border bg-subtle shadow-sm transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md active:scale-[0.99]"
    >
      <div className="relative aspect-[4/3]">
        <Image
          src={area.heroImage}
          alt={`${area.city}, California`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-brand-900/20 to-transparent"
        />
        <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
          <p className="text-xs uppercase tracking-[0.14em] text-white/80">
            {area.county}
          </p>
          <h3 className="font-display text-xl font-bold sm:text-2xl">
            {area.city}
          </h3>
        </div>
      </div>
    </Link>
  );
}
