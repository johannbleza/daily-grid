import AddHabitDrawer from "@/components/habit/AddHabitDrawer";
import HabitCard from "@/components/habit/HabitCard";
import { Button } from "@/components/ui/button";
import { SortDesc } from "lucide-react";

const Home = () => {
  return (
    <div className=" bg-zinc-950 min-h-dvh flex flex-col gap-4  items-center sm:items-start p-4  max-w-[52rem] mx-auto">
      <div className="flex justify-between items-center w-full">
        <h1 className="self-start text-2xl font-bold text-zinc-300">
          My Habits (2)
        </h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <span>Sort</span>
            <SortDesc />
          </Button>
          <AddHabitDrawer />
        </div>
      </div>
      <div className="sm:grid grid-cols-2 gap-4 flex flex-col">
        <HabitCard />
        <HabitCard />
        <HabitCard />
        <HabitCard />
        <HabitCard />
      </div>
    </div>
  );
};

export default Home;
