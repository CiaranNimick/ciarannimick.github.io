# GitHub Pages deployment

This ZIP is repository-ready: `index.html`, `style.css`, `script.js`, `CNAME`, and `assets/` are all at the repository root.

## Deploy

1. Create or open the GitHub repository.
2. Upload all contents of this folder to the repository root (not inside another folder).
3. In **Settings → Pages**, choose **Deploy from a branch**.
4. Select the publishing branch (usually `main`) and `/ (root)`, then save.
5. Keep `CNAME` if using the existing custom domain. Delete `CNAME` if using only the default `username.github.io` address.

The `.nojekyll` file tells GitHub Pages to serve the site as plain static HTML/CSS/JavaScript.
