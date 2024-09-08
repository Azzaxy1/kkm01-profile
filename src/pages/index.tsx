import FullScreenCarousel from "@/components/Home/FullScreenCarousel";
import HeroSection from "@/components/Home/hero-section";
import LocationSection from "@/components/Home/location-section/Location";
import ProfileDesa from "@/components/Home/ProfileDesa";

export default function Home() {
  return (
    <main>
      {/* <FullScreenCarousel /> */}
      <HeroSection />
      <LocationSection />
      <ProfileDesa />
    </main>
  );
}

