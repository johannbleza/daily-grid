import { SignInButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex justify-center items-center mt-12 p-2 flex flex-col gap-4 text-center ">
      <h1 className="text-4xl md:text-6xl font-bold max-w-[40rem]">
        Build Lasting Habits with{" "}
        <span className="text-5xl md:text-7xl bg-gradient-to-r from-slate-300 to-slate-100 bg-clip-text text-transparent">
          DailyGrid
        </span>
      </h1>
      <p className="text-zinc-400 text-sm md:text-lg max-w-80 md:max-w-[40rem]">
        Track your progress, stay motivated, and achieve your goals with our
        intuitive and beautiful habit tracking app.
      </p>
      <div className="flex gap-2">
        <SignInButton mode="modal">
          <Button className="bg-gradient-to-r from-slate-300 to-slate-50 text-lg p-5">
            Get Started
          </Button>
        </SignInButton>
        <Button className="text-lg p-5" variant="outline">
          Learn More
        </Button>
      </div>
      <Image
        src="/hero.png"
        width={800}
        height={400}
        alt="hero"
        className="rounded-lg"
      />
    </div>
  );
};

export default Hero;
