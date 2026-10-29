import { useState, useEffect } from "react";
import Home from "./pages/Home";
import LegalPage from "./pages/LegalPage";
import NotFound from "./pages/NotFound";
import TopicPage from "./components/TopicPage";
import { TOPIC_SLUGS } from "./lib/topics";

function getInitialPath() {
  if (typeof window === "undefined") return "/";
  return window.location.pathname || "/";
}

function renderRoute(pathname: string) {
  const clean = pathname.replace(/\/+$/, "") || "/";

  if (clean === "/" || clean === "/en") {
    return <Home initialLanguage={clean === "/en" ? "en" : "id"} />;
  }

  const legalId = ["privacy", "terms", "cookies"];
  const enMatch = clean.match(/^\/en\/([^/]+)$/);
  if (enMatch) {
    if (legalId.includes(enMatch[1])) {
      return <LegalPage type={enMatch[1] as "privacy" | "terms" | "cookies"} language="en" />;
    }
    if (TOPIC_SLUGS.includes(enMatch[1])) {
      return <TopicPage slug={enMatch[1]} language="en" />;
    }
    return <NotFound />;
  }

  const seg = clean.match(/^\/([^/]+)$/);
  if (seg) {
    if (legalId.includes(seg[1])) {
      return <LegalPage type={seg[1] as "privacy" | "terms" | "cookies"} language="id" />;
    }
    if (TOPIC_SLUGS.includes(seg[1])) {
      return <TopicPage slug={seg[1]} language="id" />;
    }
    return <NotFound />;
  }

  return <NotFound />;
}

export default function App() {
  const [path, setPath] = useState<string>(getInitialPath());

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname || "/");
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  return renderRoute(path);
}
