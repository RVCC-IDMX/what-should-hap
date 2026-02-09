# Deploying to Netlify

Your project works locally - now let's put it on the web!

---

## What is Netlify?

Netlify hosts static websites for free. "Static" means HTML, CSS, and JavaScript files that don't need a server to run - exactly what we built!

**Why Netlify?**

- Free for personal projects
- Automatic deploys when you push to GitHub
- No configuration needed for simple sites
- Your site gets a real URL you can share

---

## Step 1: Create a Netlify account

1. Go to [netlify.com](https://netlify.com)
2. Click "Sign up"
3. Choose "Sign up with GitHub" (recommended - makes step 2 easier)
4. Authorize Netlify to access your GitHub account

---

## Step 2: Connect your repository

1. From your Netlify dashboard, click "Add new site"
2. Choose "Import an existing project"
3. Select "GitHub" as your Git provider
4. **Important:** Look for your repo under the **RVCC-IDMX** organization, not your personal account! GitHub Classroom repos are owned by the class organization.
5. Find and select your "What Should I...?" repository
6. Netlify will auto-detect that it's a static site

**Can't find your repo?** Make sure you've authorized Netlify to access the RVCC-IDMX organization. You may need to click "Configure" next to the organization name to grant access.

---

## Step 3: Configure deploy settings

You'll see a configuration screen. For our project:

| Setting           | Value                    |
| ----------------- | ------------------------ |
| Branch to deploy  | `main` (default)         |
| Build command     | Leave blank              |
| Publish directory | Leave blank or enter `.` |

Click "Deploy site"

**Why no build command?** We don't have a build step - our HTML, CSS, and JS files are ready to serve as-is. In Week 4, when we add Vite, we'll need a build command.

---

## Step 4: Wait for deployment

Netlify will:

1. Clone your repository from GitHub
2. Copy your files to their global CDN (content delivery network)
3. Generate a URL for your site

This takes about 30-60 seconds. You'll see "Site is live" when it's done.

---

## Step 5: Get your URL

Netlify gives you a random URL like `elegant-cupcake-a1b2c3.netlify.app`.

**To customize it:**

1. Go to "Site configuration" → "Site details"
2. Click "Change site name"
3. Enter something memorable (like `yourname-snack-finder`)

Your URL becomes: `yourname-snack-finder.netlify.app`

---

## Step 6: Test your live site

1. Open your Netlify URL in a browser
2. Try all your form filters
3. Make sure recommendations display correctly
4. Check on your phone too!

---

## Troubleshooting

### Can't find my repository

- Your repo is under **RVCC-IDMX**, not your personal GitHub account
- Click "Configure" next to RVCC-IDMX to grant Netlify access
- If you still don't see it, try logging out of Netlify and back in

### "Page not found" (404 error)

- Make sure `index.html` is in the root of your repo, not inside a folder
- Check that the file is named exactly `index.html` (lowercase)

### Styles not loading

- Open browser DevTools (F12) → Console tab
- Look for 404 errors on CSS files
- Check that the path in your HTML matches your file location

### JavaScript not working

- Open browser DevTools (F12) → Console tab
- Look for red error messages
- Common issue: script tags in wrong order (data.js must load before app.js)

### Changes not showing up

- Make sure you pushed your changes to GitHub
- Check Netlify dashboard for deploy status
- Try a hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

---

## How automatic deploys work

Every time you push to GitHub:

1. Netlify detects the new commits
2. Pulls your updated code
3. Redeploys your site automatically
4. Usually takes 30-60 seconds

You don't need to do anything - just push and wait!

---

## What gets deployed?

Everything in your repo becomes public on the internet. The `netlify.toml` file in your project configures the deployment.

**Files that ARE deployed:**

- index.html
- styles.css
- data.js, matching.js, app.js
- Any images you add

**Files that are deployed but not linked:**

- docs/ folder (accessible if someone knows the URL)
- README.md
- Other markdown files

For this project, that's fine. In production apps, you'd want to exclude documentation from the build.

---

## Summary

| Step | Action                          |
| ---- | ------------------------------- |
| 1    | Create Netlify account (GitHub) |
| 2    | Import your repository          |
| 3    | Leave build settings blank      |
| 4    | Wait for deploy                 |
| 5    | Customize your site name        |
| 6    | Test everything works           |

**Congratulations!** Your project is now live on the internet. Share your URL!
