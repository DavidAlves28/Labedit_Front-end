import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignupPage from "../pages/SignupPage";

import LoginPage from "../pages/LoginPage";
import CommentPostByIdPage from "../pages/CommentPostByIdPage";
import FeedPage from "../pages/FeedPage";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/signupPage" element={<SignupPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/feed/:id" element={<CommentPostByIdPage />} />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
