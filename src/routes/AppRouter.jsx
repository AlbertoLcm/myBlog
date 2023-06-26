import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
const LazyHome = lazy(() => import("../pages/Home.jsx"));

function AppRouter() {
  return (
    <Suspense fallback={<p>Cargando...</p>}>
      <Routes>
        <Route path="/" element={<LazyHome />} />
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
