import Hero from "@/components/Hero/Hero";
import Together from "@/components/Together/Together";

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
      </section>
    </main>
  );
}
