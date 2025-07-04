import { Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { Layout } from "./components/Layout/Layout";
import { Modal } from "./components/Modal/Modal";
import { GlobalStyle } from "./theme/globalStyles";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import MediaPage from "./pages/MediaPage";
import NewsPage from "./pages/NewsPage";
import FeaturesPage from "./pages/FeaturesPage";

function App() {
  return (
    <AppProvider>
      <GlobalStyle />
      <Routes>
        {/* Public routes */}
        <Route path="/auth" element={<AuthPage />} />

        {/* Protected routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout>
                <HomePage />
              </Layout>
              <Modal />
            </ProtectedRoute>
          }
        />

        <Route
          path="/media"
          element={
            <ProtectedRoute>
              <Layout>
                <MediaPage />
              </Layout>
              <Modal />
            </ProtectedRoute>
          }
        />

        <Route
          path="/news"
          element={
            <ProtectedRoute>
              <Layout>
                <NewsPage />
              </Layout>
              <Modal />
            </ProtectedRoute>
          }
        />

        <Route
          path="/features"
          element={
            <ProtectedRoute>
              <Layout>
                <FeaturesPage />
              </Layout>
              <Modal />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AppProvider>
  );
}

export default App;
