import { useAppData } from "../../hooks/useAppData";
import { Header } from "../Header/Header";
import { Hero } from "../Hero/Hero";
import { Sidebar } from "../Sidebar/Sidebar";
import { SkeletonSection } from "../Skeleton/SkeletonSection";
import { PageFrame, MainContainer, Content } from "./layout.styles";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface LayoutProps {
  children: React.ReactNode;
}

const LoadingScreen: React.FC = () => (
  <PageFrame>
    <Header />
    <MainContainer>
      <Sidebar />
      <Content>
        <Hero />
        <SkeletonTheme baseColor="#e8e8e8" highlightColor="#f0f0f0">
          <SkeletonSection />
          <SkeletonSection />
          <SkeletonSection />
          <SkeletonSection />
        </SkeletonTheme>
      </Content>
    </MainContainer>
  </PageFrame>
);

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isLoading } = useAppData();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <PageFrame>
      <Header />
      <MainContainer>
        <Sidebar />
        <Content>{children}</Content>
      </MainContainer>
    </PageFrame>
  );
};
