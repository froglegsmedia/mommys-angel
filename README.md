# Mommy's Angel

A single-page landing page for Mommy's Angel, a boutique pet couture atelier. Plain HTML and CSS, with a few lines of JavaScript for the waitlist confirmation. `index.html` lives at the repository root so GitHub Pages can serve it directly.

Open `index.html` in a browser, or from this folder run:

```bash
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.

## Deploy with GitHub Pages

The workflow in [`.github/workflows/pages.yml`](.github/workflows/pages.yml) publishes the site on every push to `main`.

1. Open **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main`, or run **Deploy static content to Pages** from the Actions tab.
4. The site URL is shown on the workflow run and under **Settings → Pages**. For this repository it will look like `https://<owner>.github.io/mommys-angel/`.

Paths in the page are relative, so it works on a project site (`/mommys-angel/`) and at a domain root.

If you would rather deploy without Actions: **Settings → Pages → Deploy from a branch**, branch `main`, folder **`/ (root)`**. The [`.nojekyll`](.nojekyll) file is included so Jekyll does not process the site.

## Waitlist

The signup is front-end only. Submitting it confirms on the page and does not store or send the address. The form's `mailto` action is a fallback for browsers with JavaScript disabled. Replace `hello@mommysangel.example` in `index.html` with your own address, and connect a form provider before you treat the list as real.
