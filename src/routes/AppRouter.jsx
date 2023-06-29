import { Suspense, lazy } from "react";
import { Route, Routes, useParams } from "react-router-dom";
const LazyHome = lazy(() => import("../pages/Home.jsx"));

const Post = () => {
  const { idPost } = useParams();
  return <h1>Post {idPost}</h1>;
};

function AppRouter() {
  return (
    <Suspense fallback={<p>Cargando...</p>}>
      <Routes>
        <Route path="/*" element={<LazyHome />} />
        <Route path="/profile" element={<h1>Perfil</h1>} />
        <Route path="/:idPost" element={<Post />} />
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
