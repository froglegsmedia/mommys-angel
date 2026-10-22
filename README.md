# Mommy’s Angel

Coming-soon landing page for Mommy’s Angel, a chic and funky house for people who raise their pets like family.

The page is a static site: `index.html`, `styles.css`, and `script.js`. It is ready for GitHub Pages.

## What’s on the page

- Hero, brand story, and the two lines: Sphynx cats, and every animal (household pets plus horses, cows, goats, and other livestock)
- Placeholder products marked **Coming soon**, with prices **TBA**
  - Food, the main line, including recipes formulated with lion’s mane to support calm
  - Funky cat trees (a giant Sphynx, a wild jungle tree)
  - Pet clothes in bright colors and bold prints
- An ingredient note for lion’s mane
- An email waitlist preview

Copy stays on the nutrition side of the line. It does not claim to diagnose, treat, cure, or prevent anything. There are no testimonials, reviews, stats, or certifications.

## Preview locally

From the repository root:

```bash
python3 -m http.server 4173
```

Open [http://127.0.0.1:4173](http://127.0.0.1:4173).

## Waitlist TODO

The signup form does **not** send or store email addresses. `script.js` only checks the address and shows a confirmation in the browser.

Before launch, connect it to a form service such as Formspree, Buttondown, Mailchimp, or your own endpoint. Then update the note in `#waitlist-note` so it matches what the service actually does.

## GitHub Pages

The workflow in `.github/workflows/pages.yml` publishes the site on every push to `main`.

One-time setup:

1. Merge the site to `main`.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.

The project URL should look like `https://froglegsmedia.github.io/mommys-angel/`. Asset paths are relative, so the page works at a project-site subpath or a custom domain.
