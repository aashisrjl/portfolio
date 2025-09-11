import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// type of gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    window.gtag("config", "G-HMD6QTV72K", {
      page_path: location.pathname,
    });
  }, [location]);

  return null;
};

export default AnalyticsTracker;
