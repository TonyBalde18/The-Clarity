# Images

All photography is from [Unsplash](https://unsplash.com) and used under the
[Unsplash Licence](https://unsplash.com/license): free for commercial use,
with no attribution required. Credit is listed here anyway so each image can be
traced and swapped.

Source files live in `src/assets/images/`. They're stored at 2000px wide, and
Astro generates optimised AVIF/WebP versions at several sizes during the build.
Never link to Unsplash directly from the site.

| File | Used on | Photographer | Source |
|---|---|---|---|
| `hero-architecture-light.jpg` | Homepage hero; also cropped into `public/og-image.jpg` for social sharing | Amal K Raju | https://unsplash.com/photos/qaO04vmpMd8 |
| `brand-statement-geometry.jpg` | Homepage brand statement (dark band) | Sebastian Schuster | https://unsplash.com/photos/A-13PmQkP1o |
| `service-strategy-notebook.jpg` | Business Strategy Consulting page | Ryunosuke Kikuno | https://unsplash.com/photos/viEzuL1ouDs |
| `service-systems-facade.jpg` | Business Systems & Process Consulting page | Ilia Bronskiy | https://unsplash.com/photos/9sxC50wJGi8 |
| `service-brand-swatches.jpg` | Brand Strategy & Positioning page | Shubham Dhage | https://unsplash.com/photos/AzKnjOs3xNk |
| `service-growth-stairs.jpg` | Business Growth Consulting page | Logan Stone | https://unsplash.com/photos/gnOv7YKoGpo |

**Founder photo (About section):** still a placeholder (TODO). Don't use a
stock photo of a person here.

## Art direction

Editorial, architectural and intentional. Look for natural light, shadow,
glass, paper, texture, geometry, workspace details and neutral interiors.
Avoid generic business people, handshakes, smiling-at-laptop shots and office
teams.

## Swapping an image

1. Put the new file in `src/assets/images/`, ideally a JPG at least 2000px wide.
2. Either give it the same filename as the image it replaces (no code changes
   needed), or update the `import` line in the file listed below.
3. Update the `alt` text so it describes the new photo.
4. Update the table above.

| Image | Where the import and alt text live |
|---|---|
| Homepage hero | `src/components/Hero.astro` |
| Brand statement | `src/components/BrandStatement.astro` |
| Service pages | `src/data/services.ts` (`image` and `imageAlt` for each service) |
| Social share image | `public/og-image.jpg`: replace with any 1200×630 JPG |

Images are cropped to a fixed aspect ratio (the `ratio` prop on `<Photo>`), so
there's no need to crop them beforehand. Keep the subject near the centre.

## Adding the founder photo

1. Save it as `src/assets/images/founder.jpg`, portrait orientation.
2. In `src/components/About.astro`, replace the `<PlaceholderArt … />` line with:

   ```astro
   <Photo src={founderImage} alt="Describe the photo, e.g. [Name], founder of The Clarity, in the studio" ratio="4 / 5" sizes="(min-width: 62rem) 26rem, 100vw" />
   ```

   and change the imports at the top to:

   ```astro
   import Photo from './Photo.astro';
   import founderImage from '../assets/images/founder.jpg';
   ```

3. Delete `src/components/PlaceholderArt.astro`.
