import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./Pages/Login/index";
import { RegisterPage } from "./Pages/Register/index";
import { HomePage } from "./Pages/HomePage/index";
import { DashBoardPage } from "./Pages/DashBoardPage";

import { ProtectRoutes } from "./components/ProtectRoutes";
import { PublicProtectRoutes } from "./components/PublicProtectRoutes.tsx";
import { NotFoundPage } from "./Pages/NotFound/index.tsx";
import { InfoArtPage } from "./Pages/InfoArtsPage/index.tsx";

const MainRouter = () => (
  <Routes>
    <Route element={<PublicProtectRoutes />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Route>
    <Route element={<ProtectRoutes />}>
      <Route path="/art/:id" element={<InfoArtPage />} />
      <Route path="/dashboard" element={<DashBoardPage />} />
    </Route>
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);
export default MainRouter;
