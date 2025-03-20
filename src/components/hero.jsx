"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

import { TypingAnimationDemo } from "./ui/TypingAnimationDemo";
// import { WorldMap } from "./ui/world-map";
import { GlobeDemo } from "./ui/GlobeDemo";
import Navbar from "./navbar";
import { AppleCardsCarouselDemo } from "./ui/AppleCardsCarouselDemo";
import { FocusCardsDemo } from "./ui/FocusCardsDemo";
import { AnimatedTestimonialsDemo } from "./testimonial";

const HeroSection = () => {
  return (
    <div className="pb-20 px-4   h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <div>
        <Navbar />
      </div>
      <div className="container mx-auto text-center mt-24 ">
        <h1 className="text-5xl md:text-6xl lg:text-[105px] pb-6 text-blue-600">
          <TypingAnimationDemo />
        </h1>
        <p className="text-xl text-zinc-500 font-bold mb-7 max-w-2xl mx-auto">
          🚦An AI-Enhanced Platform to Monitor, Optimize, and Revolutionize
          Traffic Flow with Unparalleled Accuracy and Real-Time Precision!
        </p>

        <div className="flex items-center justify-center">
          <GlobeDemo />
        </div>
      </div>
      <div className="flex justify-center space-x-4">
        <Link href={"/dashboard"}>
          <Button size="lg" className="px-8 hover:bg-cyan-300 hover:text-black">
            Get Started
          </Button>
        </Link>
        <Link href={"https://youtu.be/k5Da-dFVdZA?si=hvNur2DPZr9oxy7M"}>
          <Button size="lg" variant="outline" className="px-8 ">
            Watch Demo
          </Button>
        </Link>
      </div>
      <div>
        <AppleCardsCarouselDemo />
      </div>
      <p className="flex items-center justify-center text-6xl font-bold">
        Some Real Life Traffic Image{" "}
      </p>
      <div className="mt-7">
        <FocusCardsDemo />
        <p className="text-6xl font-bold flex justify-center items-center mt-16">
          User`s View About Our Idea
        </p>
      </div>
      <AnimatedTestimonialsDemo />
    </div>
  );
};

export default HeroSection;
