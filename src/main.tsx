import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./variables.css";
import Home from "./pages/Home.tsx";
import ShortHistory from "./pages/ShortHistory.tsx";
import Contribute from "./pages/Contribute.tsx";
import DocsLanding from "./pages/APIDocs/DocsLanding.tsx";
import ContentsLanding from "./pages/ContentsLanding.tsx";
import DocsIndex from "./pages/APIDocs/DocsIndex.tsx";
import AutoScrollToTop from "./components/AutoScrollToTop.tsx";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Loading from "./components/Loading.tsx";

// Lazy-loaded components
const PreambleContents = lazy(() => import("./pages/PreambleContents.tsx"));
const ChapterContents = lazy(() => import("./pages/ChapterContents.tsx"));
const ScheduleContents = lazy(() => import("./pages/ScheduleContents.tsx"));
const AnnexureContents = lazy(() => import("./pages/AnnexureContents.tsx"));
const AmendmentsContents = lazy(() => import("./pages/AmendmentsContents.tsx"));
const DocsAmendments = lazy(() => import("./pages/APIDocs/DocsAmendments.tsx"));
const DocsAnnexures = lazy(() => import("./pages/APIDocs/DocsAnnexures.tsx"));
const DocsSchedules = lazy(() => import("./pages/APIDocs/DocsSchedules.tsx"));
const DocsMain = lazy(() => import("./pages/APIDocs/DocsMain.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Analytics />
    <SpeedInsights />
    
    <BrowserRouter>
      <AutoScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* Non-lazy loaded routes */}
          <Route index element={<Home />} />
          <Route path="contents" element={<ContentsLanding />} />
          <Route path="history" element={<ShortHistory />} />
          <Route path="contribute" element={<Contribute />} />

          {/* Lazy-loaded routes */}
          <Route 
            path="preamble" 
            element={
              <Suspense fallback={<Loading />}>
                <PreambleContents />
              </Suspense>
            } 
          />
          <Route 
            path="chapter/:id" 
            element={
              <Suspense fallback={<Loading />}>
                <ChapterContents />
              </Suspense>
            } 
          />
          <Route 
            path="schedule/:id" 
            element={
              <Suspense fallback={<Loading />}>
                <ScheduleContents />
              </Suspense>
            } 
          />
          <Route 
            path="annexure/:id" 
            element={
              <Suspense fallback={<Loading />}>
                <AnnexureContents />
              </Suspense>
            } 
          />
          <Route 
            path="amendments" 
            element={
              <Suspense fallback={<Loading />}>
                <AmendmentsContents />
              </Suspense>
            } 
          />

          {/* API Docs routes */}
          <Route path="api-docs" element={<DocsLanding />}>
            <Route index element={<DocsIndex />} />
            <Route 
              path="amendments" 
              element={
                <Suspense fallback={<Loading />}>
                  <DocsAmendments />
                </Suspense>
              } 
            />
            <Route 
              path="schedules" 
              element={
                <Suspense fallback={<Loading />}>
                  <DocsSchedules />
                </Suspense>
              } 
            />
            <Route 
              path="annexures" 
              element={
                <Suspense fallback={<Loading />}>
                  <DocsAnnexures />
                </Suspense>
              } 
            />
            <Route 
              path="main" 
              element={
                <Suspense fallback={<Loading />}>
                  <DocsMain />
                </Suspense>
              } 
            />
          </Route>

          <Route 
            path="*" 
            element={
              <Suspense fallback={<Loading />}>
                <NotFound />
              </Suspense>
            } 
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);