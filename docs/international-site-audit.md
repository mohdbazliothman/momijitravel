# International Inbound Site Audit

Date: 2026-08-05

## 1. Existing Framework And Dependencies

- Framework: Next.js 16.3.0 with App Router.
- Language: JavaScript and JSX.
- Styling: Single global stylesheet at `app/globals.css`.
- Runtime: React 19.2.8.
- Linting: ESLint with `eslint-config-next`.
- Deployment: Vercel-oriented Next.js app. `next.config.mjs` uses `trailingSlash: true`.
- Server functionality: `app/api/inbound-form/route.js` uses a server-side route for inbound form email delivery through Resend.
- Email env vars documented: `RESEND_API_KEY`, `EMAIL_FROM`, `CONTACT_EMAIL_TO`.

## 2. Current Routes

Published route files currently in the app:

- `/`
- `/en/`
- `/ms/`
- `/int/`
- `/int/book-planning-call/`
- `/int/travel-enquiry/`
- `/int/multi-country-tours/malaysia-singapore-thailand/`
- `/api/inbound-form`
- `/robots.txt`
- `/sitemap.xml`

Inbound routes listed in `app/content/inboundContent.js` but not yet published as pages include:

- `/int/malaysia-tours/`
- `/int/malaysia-tours/essential-malaysia/`
- `/int/malaysia-tours/malaysia-heritage-journey/`
- `/int/malaysia-tours/family-tour/`
- `/int/multi-country-tours/`
- `/int/multi-country-tours/malaysia-singapore/`
- `/int/destinations/`
- `/int/destinations/kuala-lumpur/`
- `/int/destinations/melaka/`
- `/int/destinations/penang/`
- `/int/destinations/langkawi/`
- `/int/destinations/cameron-highlands/`
- `/int/destinations/genting-highlands/`
- `/int/experiences/`
- `/int/experiences/culture-and-heritage/`
- `/int/experiences/food-tours/`
- `/int/experiences/nature-and-wildlife/`
- `/int/experiences/muslim-friendly-travel/`
- `/int/experiences/family-holidays/`
- `/int/private-tours/`
- `/int/group-tours/`
- `/int/educational-tours/`
- `/int/corporate-incentive-travel/`
- `/int/travel-guide/`
- `/int/about/`
- `/int/contact/`

## 3. Reusable Components

Current reusable components:

- `InboundShell.jsx`: inbound header, mobile menu, footer and scroll reveal.
- `InboundHome.jsx`: international homepage layout.
- `InboundJourneyOptions.jsx`: two-option journey-planning CTA section.
- `InboundFormPage.jsx`: reusable shell for inbound form pages.
- `InboundSecureForm.jsx`: shared secure client form for planning calls and written enquiries.
- `InboundSignatureTour.jsx`: signature multi-country journey page.
- `LazyYouTubeEmbed.jsx`: lightweight click-to-play YouTube embed.
- `LocalizedHome.jsx`: outbound bilingual homepage.
- `InboundEnquiryForm.jsx`: older WhatsApp-opening inbound enquiry form; currently not used on the new inbound homepage.

Recommended reusable components still needed:

- Breadcrumbs component.
- Inbound route-aware header or navigation grouping component.
- Journey collection card.
- Travel style card.
- Destination template component.
- Experience template component.
- Guide card and article template.
- FAQ accordion for itinerary and guide pages.
- StructuredData component.

## 4. Current SEO Implementation

- `siteUrl` is configured as `https://www.momiji-travel.com`.
- `app/content/inboundContent.js` provides `inboundMetadata(page)`.
- Inbound metadata includes canonical URL, Open Graph, Twitter card and basic language alternate.
- `app/sitemap.js` manually includes `/en/`, `/ms/`, `/int/`, `/int/book-planning-call/`, `/int/travel-enquiry/` and the signature multi-country route.
- `app/robots.js` allows `/`, `/en/`, `/ms/`, `/int/` and `/images/`, and disallows `/api/` and `/admin/`.
- Structured data exists for TravelAgency, breadcrumbs, FAQ and TouristTrip helpers.

## 5. Current Metadata Problems

- Many planned inbound routes exist in content but have no actual pages, so they should not be linked as live pages or added to sitemap until built.
- Inbound language alternates use `en` rather than a more precise future-ready `en-MY`.
- Form pages have metadata, but no visible breadcrumbs yet.
- Some Open Graph image defaults point to outbound imagery rather than inbound-specific Malaysia imagery.
- Several planned route names differ from the new brief, for example `/int/private-tours/` versus proposed `/int/private-tours-malaysia/`.

## 6. Duplicate Content Risks

- `/int/multi-country-tours/malaysia-singapore-thailand/` exists, while the new route architecture requests `/int/malaysia-singapore-thailand/`. A redirect or canonical route decision is needed.
- Existing route constants include both specific planned route URLs and anchor-based homepage navigation. If pages are added without careful mapping, navigation can accidentally point to a mix of anchors and pages.
- Guide articles should not be published as thin pages. Start with a small number of substantial guides.

## 7. Accessibility Issues

- The mobile menu has `aria-expanded` and button semantics, but deeper menu grouping and active states are limited.
- The new forms use proper labels and consent, but inline field-level errors are not yet implemented.
- Some decorative visual elements are still represented as text badges instead of hidden decorative elements.
- Breadcrumbs are currently schema-only, not visible or navigable.
- Focus states rely mostly on browser defaults and should be strengthened globally.

## 8. Performance Issues

- Several PNG images are large and should be converted to AVIF/WebP or delivered through `next/image` where practical.
- The project uses raw `<img>` tags instead of Next Image optimization.
- The YouTube section is lightweight and click-to-play, which is good.
- CSS is global and growing; reusable components are not yet enough to prevent style drift.
- The route count is still low, but a larger content architecture will need careful image and bundle discipline.

## 9. Broken Or Weak Internal Links

- Header links mostly point to homepage anchors, which is safe but limits SEO depth.
- Some card `slug` values point to pages that do not exist yet.
- Several `inboundRoutes` entries are planned but unpublished.
- CTA links to `/int/book-planning-call/` and `/int/travel-enquiry/` are valid.

## 10. Content Gaps

- No dedicated Malaysia tour collection page yet.
- No dedicated private tours landing page.
- No custom itinerary landing page.
- No destination hub or individual destination pages.
- No experience hub or experience pages.
- No travel guide hub or article pages.
- No About Momiji inbound-specific page.
- No visible privacy policy or terms page for form submission.
- No verified inbound testimonials, and current inbound site correctly avoids fake reviews.

## 11. Existing Assets That Can Be Reused

Inbound-specific assets:

- `public/images/international/hero-malaysia.avif`
- `public/images/international/tour-grand-journey.png`
- `public/images/international/planning-video-call.png`
- `public/images/international/destination-kuala-lumpur.png`
- `public/images/international/destination-melaka.png`
- `public/images/international/destination-penang.png`
- `public/images/international/destination-langkawi.png`
- `public/images/international/destination-cameron-highlands.png`
- `public/images/international/destination-genting-highlands.png`
- `public/images/international/tour-family-discovery-genting.jpg`
- `public/images/international/tour-heritage-culture-melaka.webp`
- `public/images/international/tour-nature-highlands.avif`
- `public/images/international/why-malaysia-culture.jpg`
- `public/images/international/why-malaysia-food-street.jpg`
- `public/images/international/why-malaysia-nature-island.png`
- `public/images/international/why-malaysia-regional.jpg`

Brand and company assets:

- `public/images/momiji-logo.jpg`
- `public/images/momiji-team-desktop.jpg`
- `public/images/momiji-team-mobile.jpg`

## 12. Recommended Implementation Phases

Phase 1: Audit and route architecture

- Complete this audit.
- Create SEO map.
- Normalise route architecture.
- Decide redirect from old signature route to the new clean route.

Phase 2: Shared inbound content model and components

- Create reusable data structures for tours, destinations, experiences, guide articles and travel styles.
- Add shared card components and visible breadcrumbs.
- Add metadata/schema helpers per page type.

Phase 3: Homepage reconstruction

- Reposition hero around "Private Malaysia Journeys, Crafted Around You".
- Add verified trust strip.
- Reorder homepage around Malaysia-first positioning.
- Add Melaka specialist and custom planning sections.

Phase 4: Commercial landing pages

- Build `/int/malaysia-tours/`, `/int/private-tours-malaysia/`, `/int/custom-malaysia-itinerary/` and key travel-style pages.

Phase 5: Destinations and experiences

- Build destination hub and priority destination pages.
- Build experience hub and only publish deliverable experiences.

Phase 6: Travel guide structure

- Build guide hub and publish a small set of substantial planning guides.

Phase 7: Technical SEO and performance

- Update sitemap, redirects, robots, schema, image strategy and accessibility.

Phase 8: QA

- Test routes, metadata, forms, mobile navigation, internal links, schema, lint and production build.

## Proposed Route Architecture

Use these routes as the clean target architecture:

- `/int/`
- `/int/malaysia-tours/`
- `/int/private-tours-malaysia/`
- `/int/custom-malaysia-itinerary/`
- `/int/malaysia-singapore-thailand/`
- `/int/experiences/`
- `/int/destinations/`
- `/int/travel-guide/`
- `/int/about/`
- `/int/contact/`
- `/int/book-planning-call/`
- `/int/travel-enquiry/`

Travel-style routes:

- `/int/family-tours-malaysia/`
- `/int/muslim-friendly-malaysia-tours/`
- `/int/cultural-tours-malaysia/`
- `/int/nature-tours-malaysia/`
- `/int/senior-friendly-malaysia-tours/`
- `/int/educational-tours-malaysia/`
- `/int/corporate-incentive-travel-malaysia/`
- `/int/group-tours-malaysia/`

Priority destination routes:

- `/int/destinations/kuala-lumpur/`
- `/int/destinations/melaka/`
- `/int/destinations/penang/`
- `/int/destinations/langkawi/`
- `/int/destinations/cameron-highlands/`
- `/int/destinations/genting-highlands/`

Additional destination routes should only be published after content and service capability are confirmed:

- `/int/destinations/ipoh/`
- `/int/destinations/taman-negara/`
- `/int/destinations/putrajaya/`

Redirect recommendation:

- Redirect `/int/multi-country-tours/malaysia-singapore-thailand/` to `/int/malaysia-singapore-thailand/` after the new route is created and verified.
