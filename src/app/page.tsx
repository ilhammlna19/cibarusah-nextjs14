import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LeaderSection from "@/components/LeaderSection";
import StatsSection from "@/components/StatsSection";
import NewsSection from "@/components/NewsSection";
import AnnouncementSection from "@/components/AnnouncementSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <HeroSection />
        <LeaderSection />
        <StatsSection />
        <NewsSection />
        <AnnouncementSection />
      </div>
      <Footer />
    </main>
  );
}
