import { BrowserRouter, Routes, Route } from "react-router-dom";

//Views
import LandingPage from "../views/LandingPage";
//Dynamic routes
import { ROUTES } from "../utils/constants";
//Providers
import { UserProvider } from "../contexts/UserContext";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {ROUTES.map((route, i) => (
            <Route path={route.path} element={route.component} key={i + 1} />
          ))}
          <Route path="*" element={<h1>404 Not found</h1>} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}
