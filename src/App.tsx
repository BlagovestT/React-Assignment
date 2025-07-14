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
  const renderProtectedRoute = (PageComponent: React.FC) => (
    <ProtectedRoute>
      <Layout>
        <PageComponent />
      </Layout>
      <Modal />
    </ProtectedRoute>
  );
  return (
    <AppProvider>
      <GlobalStyle />
      <Routes>
        {/* Public routes */}
        <Route path="/auth" element={<AuthPage />} />

        {/* Protected routes */}
        <Route path="/" element={renderProtectedRoute(HomePage)} />
        <Route path="/media" element={renderProtectedRoute(MediaPage)} />
        <Route path="/news" element={renderProtectedRoute(NewsPage)} />
        <Route path="/features" element={renderProtectedRoute(FeaturesPage)} />
      </Routes>
    </AppProvider>
  );
}

export default App;
