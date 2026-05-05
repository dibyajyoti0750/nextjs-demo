<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog into the DevEvent Next.js App Router application. The following changes were made:

- **`instrumentation-client.ts`** (new file): Initializes PostHog client-side using the Next.js 15.3+ `instrumentation-client` convention. Configured with a reverse proxy path (`/ingest`), exception capture, and debug mode in development.
- **`next.config.ts`**: Added reverse proxy rewrites for `/ingest/*` and `/ingest/static/*` / `/ingest/array/*` routes to route PostHog traffic through the Next.js server, reducing tracking-blocker interference. Also enabled `skipTrailingSlashRedirect`.
- **`components/ExploreBtn.tsx`**: Added `posthog.capture('explore_events_clicked')` to the button's `onClick` handler. Converted to client component (already was).
- **`components/EventCard.tsx`**: Added `"use client"` directive and `posthog.capture('event_card_clicked', {...})` to the `<Link>` `onClick` handler, capturing event title, slug, location, and date as properties.
- **`.env.local`**: Created with `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` environment variables.

| Event | Description | File |
|---|---|---|
| `explore_events_clicked` | User clicked the 'Explore Events' CTA button on the homepage | `components/ExploreBtn.tsx` |
| `event_card_clicked` | User clicked on an event card to view the event detail page | `components/EventCard.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard** — [Analytics basics](https://us.posthog.com/project/410097/dashboard/1544988)
- **Insight** — [Explore Events CTA clicks over time](https://us.posthog.com/project/410097/insights/FbzkiKfm)
- **Insight** — [Event card clicks over time](https://us.posthog.com/project/410097/insights/tvbRni7n)
- **Insight** — [CTA to event click conversion funnel](https://us.posthog.com/project/410097/insights/rKJPjcsc)
- **Insight** — [Most clicked events (by slug)](https://us.posthog.com/project/410097/insights/h6DLgAN9)
- **Insight** — [Total event card clicks](https://us.posthog.com/project/410097/insights/Pe0KO8hD)

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
