import { Grid2x2Check } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

const AppBar = () => {
  return (
    <div className="w-full">
      <div className="max-w-[52rem] mx-auto p-4 flex justify-between items-center shadow-xl">
        <div className="flex justify-center items-center gap-2 text-zinc-300">
          <Grid2x2Check className="size-8" />
          <div className="flex flex-col justify-center items-start">
            <h1 className="font-bold  text-lg mt-[-4px]">DailyGrid</h1>
            <p className="text-zinc-400 text-xs mt-[-4px] text-[10px]">
              Track your daily habits.
            </p>
          </div>
        </div>
        <SignedOut>
          <SignInButton>
            <Button variant="outline">Sign In </Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default AppBar;
