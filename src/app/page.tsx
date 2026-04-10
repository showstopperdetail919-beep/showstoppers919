import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import HowItWorks from '@/components/HowItWorks';
import ServiceArea from '@/components/ServiceArea';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import BookingSection from '@/components/BookingSection';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <HowItWorks />
        <ServiceArea />
        <Gallery />
        <Testimonials />
        <FAQ />
        <BookingSection />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
