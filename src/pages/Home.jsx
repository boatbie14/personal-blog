import MainLayout from "@/layouts/MainLayout";
import HeroSection from "@/components/home/HeroSection";
import ArticleSection from "@/components/home/ArticleSection";

function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <ArticleSection />
    </MainLayout>
  );
}

export default Home;
