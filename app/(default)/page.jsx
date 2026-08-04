import { absoluteUrl, localeRoutes } from "../content/siteContent";

export const metadata = {
  title: "Momiji Travel & Tours",
  description: "Momiji Travel & Tours Sdn Bhd official website.",
  alternates: {
    canonical: absoluteUrl("/"),
    languages: {
      "en-MY": absoluteUrl(localeRoutes.home.en),
      "ms-MY": absoluteUrl(localeRoutes.home.ms),
      "x-default": absoluteUrl("/"),
    },
  },
};

export default function DefaultEntryPage() {
  return (
    <main className="locale-entry">
      <meta httpEquiv="refresh" content="0; url=/ms/" />
      <div className="container">
        <img src="/images/momiji-logo.jpg" alt="Momiji Travel logo" />
        <h1>Momiji Travel & Tours</h1>
        <p>Redirecting to the Bahasa Melayu homepage.</p>
        <div>
          <a className="btn btn-primary" href="/ms/">Bahasa Melayu</a>
          <a className="btn" href="/en/">English</a>
        </div>
      </div>
    </main>
  );
}
