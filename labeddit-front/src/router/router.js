import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePageLogin from "../pages/homePageLogin";
import SignupPage from "../pages/SignupPage";
import ContentPage from "../pages/ContentPage";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePageLogin />} />
        <Route path="/signupPage" element={<SignupPage/>} />
        <Route path="/content" element={<ContentPage/>} />
        {/* <Route path="/carrinho" element={<CarrinhoPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />  */}
      </Routes>
    </BrowserRouter>
  );
}
