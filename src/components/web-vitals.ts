"use client";

import { useReportWebVitals } from "next/web-vitals";

export const WebVitals = () => {
  // Use `window.gtag` if you initialized Google Analytics as this example:
  // https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics
  useReportWebVitals((metric) => {
    const metrics = {
      name: metric.name,
      value: Math.round(
        metric.name === "CLS" ? metric.value * 1000 : metric.value,
      ),
      rating: metric.rating,
      delta: metric.delta,
      navigationType: metric.navigationType,
      non_interaction: true,
      id: metric.id,
      entries: metric.entries,
      event_label: metric.id,
    };

    if (typeof window !== "undefined" && typeof window?.gtag === "function") {
      window.gtag("event", metric.name, metrics);
    }
  });
  return null;
};
