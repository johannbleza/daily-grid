import { SignInButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

const CTA = () => {
  return (
    <div className="mt-24 flex justify-center items-center py-32 bg-gradient-to-r from-slate-300 to-slate-50 text-lg p-5">
      <div className="flex flex-col gap-5 sm:text-center items-center justify-center">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-500 bg-clip-text text-transparent">
          Ready to Transform Your Habits?
        </h1>
        <p className="text-black">
          Access DailyGrid today and start your journey towards a more
          disciplined and productive life.
        </p>
        <SignInButton mode="modal">
          <Button className="text-white p-8 text-lg font-bold bg-gradient-to-r from-slate-900 to-slate-800 rounded-full">
            Launch DailyGrid
          </Button>
        </SignInButton>
      </div>
    </div>
  );
};

export default CTA;
