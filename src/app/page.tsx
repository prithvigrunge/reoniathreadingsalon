import PageLoader from "@/components/ui/PageLoader";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import Booking from "@/components/sections/Booking";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <PageLoader />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <About />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
