"use client";
import { daysOfWeek, months } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Calendar = () => {
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

  const startDate = new Date(date.getFullYear(), date.getMonth(), 1);
  const endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  // Set times to midnight
  startDate.setHours(0, 0, 0, 0);
  endDate.setHours(0, 0, 0, 0);

  startDate.setDate(startDate.getDate() - startDate.getDay()); // Sunday Start
  endDate.setDate(endDate.getDate() + (7 - endDate.getDay())); // Saturday End

  const results = [];

  while (startDate.toLocaleDateString() != endDate.toLocaleDateString()) {
    results.push(startDate.toLocaleDateString());

    // Iterator
    startDate.setDate(startDate.getDate() + 1);
  }

  return (
    <div className="border-t-1 mt-4 p-4">
      <div className="grid grid-cols-7 gap-6 text-center">
        {daysOfWeek.map((day) => (
          <h2 key={day} className="text-sm text-zinc-400">
            {day}
          </h2>
        ))}
        {results.map((item) => {
          const [month, day] = item.split("/").map(Number);
          return (
            <div
              key={item}
              className="relative flex justify-center items-center"
            >
              <div
                className={cn(
                  "text-sm text-zinc-300 rounded flex size-6 justify-center items-center",
                  month != date.getMonth() + 1 && "text-zinc-600",
                  // item === today.toLocaleDateString() && "bg-zinc-400/80",
                )}
              >
                {day}
              </div>
              <div
                className={cn(
                  "absolute size-1 rounded-full bg-zinc-400  bottom-[-10px]",

                  item != today.toLocaleDateString() && "hidden",
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
