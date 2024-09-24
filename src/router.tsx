import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";

// import FavoritesPage from "./views/FavoritesPage";
const FavoritesPage = lazy(() => import('./views/FavoritesPage'));

// import IndexPage from "./views/IndexPage";
const IndexPage = lazy(() => import('./views/IndexPage'));

export default function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
        <Route element={<Layout />} >
            <Route path="/" element={
              <Suspense fallback="Loading...">
                <IndexPage />
              </Suspense>
            } index />
            <Route path="/favorites" element={
              <Suspense fallback="Loading...">
                <FavoritesPage />
              </Suspense>
            } />
        </Route>
    </Routes>
    </BrowserRouter>
  )
}
