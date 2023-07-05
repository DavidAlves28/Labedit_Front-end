import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignupPage from "../pages/SignupPage";

import PublicationsPage from "../pages/PublicationsPage";
import LoginPage from "../pages/LoginPage";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage/>} />
        <Route path="/signupPage" element={<SignupPage/>} />
        <Route path="/content" element={<PublicationsPage />} />
        {/* <Route path="/carrinho" element={<CarrinhoPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />  */}
      </Routes>
    </BrowserRouter>
  );
}
