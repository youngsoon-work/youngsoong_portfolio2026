# CODING AGENTS: READ THIS FIRST

This is a **handoff bundle** from Claude Design (claude.ai/design).

A user mocked up designs in HTML/CSS/JS using an AI design tool, then exported this bundle so a coding agent can implement the designs for real.

## What you should do — IMPORTANT

**Read the chat transcripts first.** There are 2 chat transcript(s) in `chats/`. The transcripts show the full back-and-forth between the user and the design assistant — they tell you **what the user actually wants** and **where they landed** after iterating. Don't skip them. The final HTML files are the output, but the chat is where the intent lives.

**Read `project/Case Study - Whole-life Crisis.html` in full.** The user had this file open when they triggered the handoff, so it's almost certainly the primary design they want built. Read it top to bottom — don't skim. Then **follow its imports**: open every file it pulls in (shared components, CSS, scripts) so you understand how the pieces fit together before you start implementing.

**If anything is ambiguous, ask the user to confirm before you start implementing.** It's much cheaper to clarify scope up front than to build the wrong thing.

## About the design files

The design medium is **HTML/CSS/JS** — these are prototypes, not production code. Your job is to **recreate them pixel-perfectly** in whatever technology makes sense for the target codebase (React, Vue, native, whatever fits). Match the visual output; don't copy the prototype's internal structure unless it happens to fit.

**Don't render these files in a browser or take screenshots unless the user asks you to.** Everything you need — dimensions, colors, layout rules — is spelled out in the source. Read the HTML and CSS directly; a screenshot won't tell you anything they don't.

## Bundle contents

- `README.md` — this file
- `chats/` — conversation transcripts (read these!)
- `project/` — the `Portfolio` project files (HTML prototypes, assets, components)

---

# Deployment

This portfolio is a static HTML/CSS/JS site hosted on **Firebase Hosting**.

- **Live site:** https://portfolio2026-5cf9e.web.app
- **Firebase project:** `portfolio2026-5cf9e`
- **GitHub repo:** https://github.com/youngsoon-work/youngsoong_portfolio2026
- **Served directory:** `project/` (configured via `firebase.json` → `"public": "project"`)

## Auto-deploy (GitHub Actions)

Every push to the `main` branch automatically deploys to Firebase Hosting.

```
edit files → git commit → git push origin main
                                    ↓
              GitHub Actions deploys to Firebase automatically
```

No manual `firebase deploy` is needed.

**How it works:**
- Workflow: `.github/workflows/firebase-hosting-deploy.yml`
- Triggered on push to `main`
- Authenticates using the GitHub repo secret `FIREBASE_SERVICE_ACCOUNT`
  (a Firebase service account JSON key for
  `firebase-adminsdk-fbsvc@portfolio2026-5cf9e.iam.gserviceaccount.com`)
- Uses the `FirebaseExtended/action-hosting-deploy` action, deploying to the
  `live` channel of project `portfolio2026-5cf9e`

## Manual deploy (fallback)

If you ever need to deploy by hand (outside CI), authenticate with the service
account key and run the Firebase CLI from the repo root:

```bash
export GOOGLE_APPLICATION_CREDENTIALS=/path/to/service-account-key.json
firebase deploy --project portfolio2026-5cf9e --only hosting
```

## Configuration files

- `firebase.json` — hosting config. Serves `project/`, with `cleanUrls` enabled
  and `/` rewritten to `/Home.html`.
- `.firebaserc` — sets the default Firebase project to `portfolio2026-5cf9e`.
- `.gitignore` — ignores the local `.firebase/` deploy cache.

## Custom domain (pending)

The site is intended to be served from `youngsoon.work`. To connect it:

1. In the [Firebase Console → Hosting](https://console.firebase.google.com/project/portfolio2026-5cf9e/hosting),
   add `youngsoon.work` as a custom domain.
2. In the DNS provider (Cloudflare), add the records Firebase provides:
   - **A** record: `youngsoon.work` → `199.36.158.100`
   - **TXT** record: `youngsoon.work` → `hosting-site=portfolio2026-5cf9e`
3. The previous portfolio (currently on Vercel) is being moved to the
   `2023.youngsoon.work` subdomain — add a CNAME for `2023` pointing to Vercel,
   and register that subdomain in the Vercel project.
4. Once Firebase verifies ownership, replace the existing Vercel A record
   (`76.76.21.21`) with Firebase's IP so `youngsoon.work` resolves to Firebase.
