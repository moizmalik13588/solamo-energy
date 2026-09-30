import SolamoHeader from "@/components/SolamoHeader";
import SolamoHero from "@/components/SolamoHero";
import SolamoInstallationReminder from "@/components/SolamoInstallationReminder";
import SolamoFlashdeals from "@/components/Solamoflashdeals";
import SolamoProductSection from "@/components/SolamoProductSection";
import SolamoMarquee from "@/components/SolamoMarquee";
import SolamoEnergySolutions from "@/components/SolamoEnergySolutions";
import SolamoBrands from "@/components/SolamoBrands";
import SolamoTrustedBrandsStrip from "@/components/SolamoTrustedBrandsStrip";
import SolamoWhySolamo from "@/components/SolamoWhySolamo";
import SolamoCtaBanner from "@/components/SolamoCtaBanner";
import SolamoTestimonials from "@/components/SolamoTestinomials";
import SolamoFooter from "@/components/SolamoFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function SolamoHomePage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <SolamoHeader />
      <SolamoHero /> {/* Hero */}
      <SolamoInstallationReminder />{" "}
      {/* Reminder 1: Between Hero and FlashDeals */}
      <SolamoFlashdeals /> {/* noon: Deals & Offers */}
      <SolamoProductSection /> {/* ProductSection */}
      <SolamoMarquee /> {/* MarqueeSection */}
      <SolamoEnergySolutions />{" "}
      {/* extra product carousel — noon: more recommendations */}
      <SolamoBrands />{" "}
      {/* noon: Brand/Store highlights (with product counts) */}
      <SolamoTrustedBrandsStrip />
      {/* TrustedBrands (logo strip) */}
      <SolamoWhySolamo /> {/* WhyChoose + ServiceSection (combined) */}
      <SolamoCtaBanner /> {/* CtaBanner */}
      <SolamoTestimonials /> {/* Testimonials */}
      <SolamoInstallationReminder variant="homepage" />{" "}
      {/* Reminder 2: Between Testimonials and Footer */}
      <SolamoFooter /> {/* Footer */}
      <WhatsAppFloat />{" "}
      {/* unchanged — floating button, no Noon redesign needed */}
    </main>
  );
}
