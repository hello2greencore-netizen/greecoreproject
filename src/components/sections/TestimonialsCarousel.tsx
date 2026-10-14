"use client";

import { Carousel, CarouselItem } from "@/components/ui/Carousel";
import { TestimonialCard } from "@/components/sections/TestimonialsSection";
import { GoogleReviewsLink } from "@/components/sections/TestimonialsPaginated";
import type { Testimonial } from "@/types";

/** Reviews that roll by on their own (pauses on hover, touch, or the Pause button). */
export function TestimonialsCarousel({ items, interval = 6000 }: { items: Testimonial[]; interval?: number }) {
  return (
    <>
      <Carousel aria-label="Customer reviews" autoPlay={interval} showDots={false}>
        {items.map((t, i) => (
          <CarouselItem
            key={t.id}
            aria-label={`Review ${i + 1} of ${items.length}`}
            className="w-[85%] sm:w-[calc((100%-20px)/2)] lg:w-[calc((100%-40px)/3)]"
          >
            <TestimonialCard t={t} clamp />
          </CarouselItem>
        ))}
      </Carousel>
      <GoogleReviewsLink />
    </>
  );
}
