import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./variables.css";
import AutoScrollToTop from "./components/AutoScrollToTop";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Loading from "./components/Loading";

// Preload helpers
function lazyWithPreload(factory: () => Promise<{ default: React.ComponentType<unknown> }>) {
  const Component = lazy(factory);
  (Component as React.ComponentType<unknown> & { preload?: typeof factory }).preload = factory;
  return Component;
}

// 🟢 Preloaded Pages (first load, high-priority routes)
const Home = lazyWithPreload(() => import("./pages/Home"));
const ContentsLanding = lazyWithPreload(() => import("./pages/ContentsLanding"));

// 🟡 Lazy-Loaded Pages (only fetched when needed)
const ShortHistory = lazy(() => import("./pages/ShortHistory"));
const Contribute = lazy(() => import("./pages/Contribute"));
const PreambleContents = lazy(() => import("./pages/PreambleContents"));
const ChapterContents = lazy(() => import("./pages/ChapterContents"));
const ScheduleContents = lazy(() => import("./pages/ScheduleContents"));
const AnnexureContents = lazy(() => import("./pages/AnnexureContents"));
const AmendmentsContents = lazy(() => import("./pages/AmendmentsContents"));

const DocsLanding = lazy(() => import("./pages/APIDocs/DocsLanding"));
const DocsIndex = lazy(() => import("./pages/APIDocs/DocsIndex"));
const DocsAmendments = lazy(() => import("./pages/APIDocs/DocsAmendments"));
const DocsSchedules = lazy(() => import("./pages/APIDocs/DocsSchedules"));
const DocsAnnexures = lazy(() => import("./pages/APIDocs/DocsAnnexures"));
const DocsMain = lazy(() => import("./pages/APIDocs/DocsMain"));
const NotFound = lazy(() => import("./pages/NotFound"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Analytics />
    <SpeedInsights />

    <BrowserRouter>
      <AutoScrollToTop />

      <Suspense fallback={<Loading />}>
        <Routes>
          <Route index element={<Home />} />

          <Route path="contents" element={<ContentsLanding />} />
          <Route path="preamble" element={<PreambleContents />} />
          <Route path="chapter/:id" element={<ChapterContents />} />
          <Route path="schedule/:id" element={<ScheduleContents />} />
          <Route path="annexure/:id" element={<AnnexureContents />} />
          <Route path="amendments" element={<AmendmentsContents />} />

          <Route path="history" element={<ShortHistory />} />
          <Route path="contribute" element={<Contribute />} />

          <Route path="api-docs" element={<DocsLanding />}>
            <Route index element={<DocsIndex />} />
            <Route path="amendments" element={<DocsAmendments />} />
            <Route path="schedules" element={<DocsSchedules />} />
            <Route path="annexures" element={<DocsAnnexures />} />
            <Route path="main" element={<DocsMain />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
