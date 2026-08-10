import "../globals.css";
import SiteAnalytics from "../components/SiteAnalytics";

export default function DefaultLayout({ children }) {
  return (
    <html lang="ms-MY">
      <body>{children}</body>
      <SiteAnalytics />
    </html>
  );
}
