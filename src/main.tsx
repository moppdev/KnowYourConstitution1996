import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./variables.css";
import Home from "./pages/Home.tsx";
import ShortHistory from "./pages/ShortHistory.tsx";
import Contribute from "./pages/Contribute.tsx";
import DocsLanding from "./pages/DocsLanding.tsx";
import ContentsLanding from "./pages/ContentsLanding.tsx";
import AmendmentsContents from "./pages/AmendmentsContents.tsx";
import PreambleContents from "./pages/PreambleContents.tsx";
import ScheduleContents from "./pages/ScheduleContents.tsx";
import AnnexureContents from "./pages/AnnexureContents.tsx";

createRoot(document.getElementById("root")!).render(
  // Using React Router to use routing for the website
  // All routes declared below
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

        <Route path="contents" element={<ContentsLanding />} />

        <Route path="preamble" element={<PreambleContents />} />
        <Route path="chapter/:id" element={<ContentsLanding />} />
        <Route path="section/:id"  element={<ContentsLanding />} />
        <Route path="schedule/:id"  element={<ScheduleContents />} />
        <Route path="annexure/:id"  element={<AnnexureContents />} />
        <Route path="amendments"  element={<AmendmentsContents />} />

        <Route path='history' element={<ShortHistory />}/>
        <Route path='contribute' element={<Contribute />} />

        <Route path='api-docs'>
          <Route index element={<DocsLanding />}/>
        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>
);
