"use client";

import { useEffect, useRef } from "react";
import { trackPackageView } from "../lib/analytics";

export default function PackageViewTracker({ packageName, packageDestination, packageUrl }) {
  const hasTracked = useRef(false);

  useEffect(() => {
    if (hasTracked.current) return;
    hasTracked.current = true;

    trackPackageView({
      packageName,
      packageDestination,
      packageUrl,
    });
  }, [packageDestination, packageName, packageUrl]);

  return null;
}
