import "../globals.css";
import SiteAnalytics from "../components/SiteAnalytics";

export default function InternationalLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <SiteAnalytics />
    </html>
  );
}
