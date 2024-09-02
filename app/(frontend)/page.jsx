import Donation from "@/components/Donation/Donation";
import Hero from "@/components/Hero/Hero";
import Subscribe from "@/components/Subscribe/Subscribe";
import Together from "@/components/Together/Together";
import UpcomingCampaign from "@/components/UpcomingCampaign/UpcomingCampaign";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <section>
        {/* Hero Icon */}
        <section>
          <Hero />
        </section>

        {/* Together */}
        <section>
          <Together />
        </section>

        {/* Donation */}
        <section>
          <Donation />
        </section>

        <section>
          <UpcomingCampaign />
        </section>

        <section>
          <Subscribe />
        </section>
      </section>
    </main>
  );
}
