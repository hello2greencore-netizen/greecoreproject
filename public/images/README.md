# Image assets

Drop images into these folders using the paths referenced in `src/data/*.ts`:

- `hero/` — `home.jpg`, `about.jpg`, `services.jpg`, `service-areas.jpg`, `testimonials.jpg`, `contact.jpg`
- `services/` — one image per service slug (e.g. `heat-pumps.jpg`, `air-conditioning.jpg`, `furnaces.jpg`, `mini-splits.jpg`, `duct-work.jpg`, `harvest-thermal.jpg`)
- `service-areas/` — one image per city slug (e.g. `petaluma.jpg`, `rohnert-park.jpg`, …)
- `gallery/` — `install-01.jpg` through `install-06.jpg`
- `about/` — `team.jpg`
- top level — `about-preview.jpg`

Recommended:

- Width ≥ 2000px for hero images, ≥ 1200px for cards
- WebP/AVIF preferred (Next.js will optimize)
- Use realistic, on-brand photography — no stock clichés

Images are referenced through `next/image` with proper `sizes` and `priority` flags already set in each component — just drop the files in.
