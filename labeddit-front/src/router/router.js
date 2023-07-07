import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignupPage from "../pages/SignupPage";

import PublicationsPage from "../pages/PublicationsPage";
import LoginPage from "../pages/LoginPage";
import CommentPostByIdPage from "../pages/CommentPostByIdPage";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/signupPage" element={<SignupPage />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/publications/:id" element={<CommentPostByIdPage />} />  
        
      </Routes>
    </BrowserRouter>
  );
}
