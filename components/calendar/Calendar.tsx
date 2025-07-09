"use client";
import { completeDay, removeDay } from "@/lib/actions/day.actions";
import { daysOfWeek, months } from "@/lib/constants";
import { Day } from "@/lib/types/day";
import { cn } from "@/lib/utils";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";

interface CalendarProps {
  habit_id: string;
  onAction: () => void;
  completedDays: Day[];
}

const Calendar = ({ habit_id, onAction, completedDays }: CalendarProps) => {
  const today = new Date();
  const [date, setDate] = useState(new Date());

  const handlePrevMonth = () => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() - 1);
    setDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + 1);
    setDate(newDate);
  };

  const days = useMemo(() => {
    const startDate = new Date(date.getFullYear(), date.getMonth(), 1);
    const endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    // Set times to midnight
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);

    startDate.setDate(startDate.getDate() - startDate.getDay()); // Sunday Start
    endDate.setDate(endDate.getDate() + (7 - endDate.getDay())); // Saturday End

    const results = [];

    while (startDate.toISOString() != endDate.toISOString()) {
      results.push(startDate.toISOString());

      // Iterator
      startDate.setDate(startDate.getDate() + 1);
    }

    return results;
  }, [date]);

  const handleComplete = async (date: string) => {
    const toastId = date;
    toast("Updating...", { id: toastId, position: "top-center" });
    try {
      await completeDay({ date: date, habit_id: habit_id });
      onAction();
      toast.success("Day Completed!", { id: toastId, position: "top-center" });
    } catch (error) {
      console.log(error);
      toast.error("Failed", { id: toastId, position: "top-center" });
    }
  };
  const handleRemove = async (date: string) => {
    const toastId = date;
    toast("Updating...", { id: toastId, position: "top-center" });
    try {
      await removeDay(habit_id, date);
      onAction();
      toast.success("Day Updated!", { id: toastId, position: "top-center" });
    } catch (error) {
      console.log(error);
      toast.error("Failed", { id: toastId, position: "top-center" });
    }
  };

  return (
    <div className="border-t-1 mt-4 p-4">
      <div className="grid grid-cols-7 gap-6 text-center">
        {daysOfWeek.map((day) => (
          <h2 key={day} className="text-sm text-zinc-400">
            {day}
          </h2>
        ))}
        {days.map((item) => {
          const month = parseInt(item.split("-")[1]).toString();
          const day = parseInt(item.split("-")[2].split("T")[0]).toString();
          const isComplete = completedDays.some((obj) =>
            obj.date.includes(item),
          );
          return (
            <div
              key={item}
              className="relative flex justify-center items-center"
              onClick={
                isComplete
                  ? () => handleRemove(item)
                  : () => handleComplete(item)
              }
            >
              <div
                className={cn(
                  "text-sm text-zinc-300 rounded flex size-6 justify-center items-center",
                  month != date.getMonth() + 1 && "text-zinc-600",
                  isComplete && "bg-slate-400/80 text-zinc-300",
                )}
              >
                {day}
              </div>
              <div
                className={cn(
                  "absolute size-1 rounded-full bg-zinc-400  bottom-[-10px]",

                  item != today.toISOString() && "hidden",
                )}
              ></div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between items-center w-full text-zinc-400 mt-8">
        <div className="flex justify-center items-center gap-2 text-sm">
          <CalendarDays />
          <p>
            {months[date.getMonth()]} {date.getFullYear()}
          </p>
        </div>
        <div className="flex gap-4">
          <ChevronLeft onClick={handlePrevMonth} />
          <ChevronRight onClick={handleNextMonth} />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
