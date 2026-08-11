import Navbar from "@/components/layout/Navbar";
import MobileMenuBar from "@/components/layout/MobileMenuBar";
import WhatsAppFloatingButton from "@/components/layout/WhatsAppFloatingButton";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import CategoryTabs from "@/components/menu/CategoryTabs";
import QuickCategories from "@/components/sections/QuickCategories";
import CombosSpotlight from "@/components/sections/CombosSpotlight";
import MenuSection from "@/components/sections/MenuSection";
import CoffeePicker from "@/components/sections/CoffeePicker";
import About from "@/components/sections/About";
import Location from "@/components/sections/Location";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <div className="relative">
          <CategoryTabs />
          <QuickCategories />
          <CombosSpotlight />
          <MenuSection />
        </div>
        <CoffeePicker />
        <About />
        <Location />
      </main>
      <Footer />
      <MobileMenuBar />
      <WhatsAppFloatingButton />
    </>
  );
}
