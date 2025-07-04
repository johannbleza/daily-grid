import { Grid2x2Check } from "lucide-react";
import { Button } from "../ui/button";

const AppBar = () => {
  return (
    <nav className="fixed w-full">
      <div className="max-w-[52rem] mx-auto text-zinc-400 px-4  py-5 flex justify-between items-center">
        <div className="flex justify-center items-center gap-2">
          <Grid2x2Check /> <h1 className="font-bold text-2xl">DailyGrid</h1>
        </div>
        <div className="flex gap-2">{/* <Plus /> */}</div>
        <Button variant="outline">
          <h1>Sign In</h1>
        </Button>
      </div>
    </nav>
  );
};

export default AppBar;
