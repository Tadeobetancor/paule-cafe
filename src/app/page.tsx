import Navbar from "@/components/layout/Navbar";
import MobileMenuBar from "@/components/layout/MobileMenuBar";
import WhatsAppFloatingButton from "@/components/layout/WhatsAppFloatingButton";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import CategoryGrid from "@/components/sections/CategoryGrid";
import About from "@/components/sections/About";
import Location from "@/components/sections/Location";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <CategoryGrid />
        <About />
        <Location />
        <Contact />
      </main>
      <Footer />
      <MobileMenuBar />
      <WhatsAppFloatingButton />
    </>
  );
}
