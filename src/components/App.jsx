import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import NotFound from "./NotFound";

const SharedLayout = lazy(() => import("./SharedLayout"));
const Home = lazy(() => import("../pages/Home"));
const CharacterDetails = lazy(() => import("../pages/CharacterDetails"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="character/:characterId" element={<CharacterDetails />} />
          {/* <Route path="auth" element={<Auth />} /> */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
