# /public/images

Drop real photography and image assets here. Suggested naming so they line up
with where placeholders currently live in the code:

- `hero.jpg` — Hero section (architectural / light-through-glass, no people)
- `brand-statement.jpg` — Abstract/geometric image for the brand statement section
- `founder.jpg` — About section founder photo (art-directed, not a corporate headshot)

Reference an image from any `.astro` file like this:

```astro
<img
  src={`${import.meta.env.BASE_URL}images/hero.jpg`}
  alt="Describe the photo for screen readers"
  width="1600"
  height="2000"
  loading="lazy"
/>
```

Using `import.meta.env.BASE_URL` keeps the path correct both in local dev and
once deployed under the `/the-clarity/` GitHub Pages base path.

Then remove the corresponding `<PlaceholderArt />` usage in
`src/components/*.astro` — see the comment at the top of
`src/components/PlaceholderArt.astro` for the exact swap steps.

Art direction reminder: architecture, geometric lines, windows/reflections,
light and shadow, glass/translucent materials, organised desks, notebooks,
subtle botanicals, negative space. Avoid generic stock photos of business
people, staged offices, laptops, or handshakes.
