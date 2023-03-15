import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import NotFound from "./NotFound";
import PrivateRoute from "../components/PrivateRoute";
import RestrictedRoute from "../components/RestrictedRoute";

const SharedLayout = lazy(() => import("./SharedLayout"));
const Auth = lazy(() => import("../pages/Auth"));
const Home = lazy(() => import("../pages/Home"));
const CharacterDetails = lazy(() => import("../pages/CharacterDetails"));
const AuthDashboard = lazy(() => import("../pages/AuthDashboard"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="character/:characterId" element={<CharacterDetails />} />
          <Route
            path="/auth"
            element={
              <RestrictedRoute redirectTo="/dashboard" component={<Auth />} />
            }
          />
          <Route
            path="dashboard"
            element={
              <PrivateRoute redirectTo="/auth" component={<AuthDashboard />} />
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
