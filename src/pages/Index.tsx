import Audience from "./home/_components/audience.tsx";
import Hero from "./home/_components/hero.tsx";
import MarketTicker from "./home/_components/market-ticker.tsx";
import Opportunities from "./home/_components/opportunities.tsx";
import PhotoStrip from "./home/_components/photo-strip.tsx";
import Reserve from "./home/_components/reserve.tsx";
import Results from "./home/_components/results.tsx";
import SiteFooter from "./home/_components/site-footer.tsx";
import StickyCta from "./home/_components/sticky-cta.tsx";
import TopBar from "./home/_components/top-bar.tsx";

export default function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-sans">
      <TopBar />
      <main>
        <Hero />
        <MarketTicker />
        <Opportunities />
        <PhotoStrip />
        <Results />
        <Audience />
        <Reserve />
      </main>
      <SiteFooter />
      <StickyCta />
    </div>
  );
}
