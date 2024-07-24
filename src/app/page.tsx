"use server";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { AuroraBackground } from "@/components/AuroraBackground/aurora-background";
import { LampDemo } from "@/components/LampContainer/LampDemo";
import { SpotlightPreview } from "@/components/Spotlight/SpotlightComponent";
import { CanvasRevealEffectDemo } from "@/components/CanvasRevealEffect/CanvasRevealEffectDemo";
import { CanvasRevealEffectDemo3 } from "@/components/CanvasRevealEffect/CanvasSection";
import { InfocardDemo } from "@/components/Infocard/InfocardExample";
import { ContanctComponent } from "@/components/GlowingStars/ContactComponent";
import { SpotlightAirdrop } from "@/components/Spotlight/SpotlightAirdrop";

export default async function Home() {
  return (
    <div className="min-h-screen dark">
      {/* <Image src="/bg.png" layout="fill" alt="Tulia" objectFit="cover" /> */}
      <Header />
      <main className="flex flex-col">
        {/* <div className="w-full flex items-center justify-center">
          <Image src="/tulia_icon.png" width={200} height={200} alt="Tulia" />
        </div> */}
        <AuroraBackground className="dark">
          <section
            id="tulia-app"
            className="  lg:px-40 px-16  py-96 flex justify-center items-center"
          >
            <div className="flex flex-col justify-center items-center gap-4 pl-8 animate-fade-right">
              <h2 className="text-7xl font-bold text-white text-center">
                What is Tulia?
              </h2>
              <p className="text-white text-center max-w-[520px] mt-4 text-xl">
                Personalized interest rates and repayment terms. earn interest,
                lend and borrow peer-to-peer.
              </p>
            </div>{" "}
          </section>
        </AuroraBackground>
        <section>
          <LampDemo></LampDemo>
        </section>
        <section className=" py-24 bg-grid-white/[0.04] ">
          <div className="mb-34">
            <SpotlightPreview />
          </div>
          <CanvasRevealEffectDemo />
        </section>
        <section className="">
          <CanvasRevealEffectDemo3 />
        </section>
        <section id="tulia-info" className="bg-grid-white/[0.04] py-24">
          <InfocardDemo />
        </section>
        <section id="tulia-airdrop" className="z-40 bg-grid-white/[0.04] py-20">
          <SpotlightAirdrop />
        </section>
        <section id="tulia-contact" className="bg-grid-white/[0.04] p-12">
          <ContanctComponent />
        </section>
      </main>
      <Footer />
    </div>
  );
}
