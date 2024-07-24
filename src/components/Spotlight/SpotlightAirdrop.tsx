import React from "react";
import { cn } from "@/utils/cn";
import { TypewriterEffect } from "../TypeWriter/typewriter";
import { OpenModalButton } from "../HoverButton/OpenModalButton";

export function SpotlightAirdrop() {
  const words = [
    {
      text: "Early",
      className:
        "text-4xl md:text-7xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50",
    },
    {
      text: "Access",
      className:
        "text-4xl md:text-7xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50",
    },
    {
      text: "Airdrop",
      className:
        "text-4xl md:text-7xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50",
    },
  ];
  return (
    <div className="h-[40rem]  w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.04] relative overflow-hidden">
      <div className=" p-4 max-w-9xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          <TypewriterEffect words={words} cursorClassName="bg-white" />
        </h1>
        <p className=" mt-10 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Join Tulia&apos;s exciting new campaign and climb the leaderboard to
          earn ranks and Tulia coins! Participate in claim drops that will be
          held in three phases, with the leaderboard renewing each phase to give
          everyone a fresh start. Get whitelisted for our limited early bird
          specials by joining early and completing tasks. Each rank you achieve
          grants you a portion of Tulia coins, boosting your earnings as you
          climb. Don&apos;t miss out , Stay active, and keep an eye on marketing
          updates to maximize your rewards and involvement in Tulia&apos;s
          growing ecosystem!
        </p>
        <div className="mt-10">
          <OpenModalButton></OpenModalButton>
        </div>
      </div>
    </div>
  );
}
