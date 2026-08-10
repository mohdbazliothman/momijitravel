import { GoogleAnalytics } from "@next/third-parties/google";
import AnalyticsEvents from "./AnalyticsEvents";

const gaMeasurementId = "G-ZJHWL2JKSG";

export default function SiteAnalytics() {
  return (
    <>
      <GoogleAnalytics gaId={gaMeasurementId} />
      <AnalyticsEvents />
    </>
  );
}
