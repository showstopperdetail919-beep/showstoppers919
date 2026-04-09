import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Pricing from '@/components/Pricing';
import HowItWorks from '@/components/HowItWorks';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import BookingSection from '@/components/BookingSection';
import Policies from '@/components/Policies';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Pricing />
        <HowItWorks />
        <Gallery />
        <Testimonials />
        <FAQ />
        <BookingSection />
        <Policies />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
