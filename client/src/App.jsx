import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/* Client */
import Home from "./pages/client/HomePage";
import PostPage from "./pages/client/PostPage";
import NotFound from "./pages/client/NotFoundPage";
import SignUp from "./pages/client/SignupPage";
import LogIn from "./pages/client/LoginPage";
import Profile from "./pages/client/ProfilePage";

/* Admin */
import AdminLogin from "./pages/admin/AdminLoginPage";
import AdminDashboard from "./pages/admin/AdminDashboardPage";
import ArticleListPage from "./pages/admin/ArticleListPage";
import CreateArticle from "./pages/admin/CreateArticlePage";
import AuthorAdmin from "./pages/admin/AuthorAdminPage";
import CategoryListPage from "./pages/admin/CategoryListPage";
import CreateCategory from "./pages/admin/CreateCategoryPage";
import NotificationListPage from "./pages/admin/NotificationPage";
import ResetPassword from "./pages/admin/ResetAdmin";

/* Components */
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Client */}
          <Route path="/" element={<Home />} />
          <Route path="/post/:postId" element={<PostPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/profile" element={<Profile />} />

          {/* Admin */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/article" element={<ArticleListPage />} />
          <Route path="/admin/article/create" element={<CreateArticle />} />
          <Route path="/admin/profile" element={<AuthorAdmin />} />
          <Route path="/admin/category" element={<CategoryListPage />} />
          <Route path="/admin/category/create" element={<CreateCategory />} />
          <Route path="/admin/notification" element={<NotificationListPage />} />
          <Route path="/admin/reset-password" element={<ResetPassword />} />

          {/* 404 Page */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </BrowserRouter>
      <Toaster richColors />
    </>
  );
}

export default App;
