import "../globals.css";
import SiteAnalytics from "../components/SiteAnalytics";

export default function EnglishLayout({ children }) {
  return (
    <html lang="en-MY">
      <body>{children}</body>
      <SiteAnalytics />
    </html>
  );
}
