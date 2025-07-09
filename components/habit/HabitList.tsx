"use client";
import { SortDesc } from "lucide-react";
import AddHabitDrawer from "./AddHabitDrawer";
import HabitCard from "./HabitCard";
import { Button } from "../ui/button";
import { useCallback, useEffect, useState } from "react";
import { Habit } from "@/lib/types/habit";
import { getHabits } from "@/lib/actions/habit.actions";

const HabitList = () => {
  const [habits, setHabits] = useState<Habit[]>([]);

  const fetchHabits = useCallback(async () => {
    try {
      setHabits((await getHabits()) ?? []);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchHabits();
  }, [fetchHabits]);

  return (
    <div className=" bg-zinc-950 min-h-dvh flex flex-col gap-4  items-center sm:items-start p-4  max-w-[52rem] mx-auto">
      <div className="flex justify-between items-center w-full">
        <h1 className="self-start text-2xl font-bold text-zinc-300">
          My Habits ({habits.length})
        </h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <span>Sort</span>
            <SortDesc />
          </Button>
          <AddHabitDrawer onAdd={fetchHabits} />
        </div>
      </div>
      {habits.length != 0 ? (
        <div className="sm:grid grid-cols-2 gap-4 flex flex-col">
          {habits.map(({ id, name, icon, description }) => (
            <HabitCard
              onEdit={fetchHabits}
              key={id}
              id={id!}
              name={name}
              icon={icon}
              description={description!}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center mt-12 gap-2 w-full">
          <h1 className="text-zinc-300 text-lg">No habits yet</h1>
          <p className="text-zinc-400">
            Click &quot;Add +&quot; to get started.
          </p>
        </div>
      )}
    </div>
  );
};

export default HabitList;
