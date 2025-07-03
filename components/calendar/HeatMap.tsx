"use client";
import DaySquare from "@/components/calendar/DaySquare";
import { daysOfWeek } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface HeatMapProps {
  showDaysOfWeek?: boolean;
  showMonths?: boolean;
}

const HeatMap = ({
  showMonths = false,
  showDaysOfWeek = false,
}: HeatMapProps) => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();

  const startDate = new Date(currentYear, currentMonth - 12, 1); // 6 Months Ago
  const endDate = new Date();

  // Set times to midnight
  startDate.setHours(0, 0, 0, 0);
  endDate.setHours(0, 0, 0, 0);

  startDate.setDate(startDate.getDate() - startDate.getDay()); // Sunday Start
  endDate.setDate(endDate.getDate() + (7 - endDate.getDay())); // Saturday End

  const days = [];

  while (startDate.toLocaleDateString() != endDate.toLocaleDateString()) {
    days.push(startDate.toLocaleDateString());

    // Iterator
    startDate.setDate(startDate.getDate() + 1);
  }

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
    }
  }, []);

  return (
    <div className="bg-gray-950 rounded flex items-center justify-center min-w-[360px]">
      <div
        className={cn(
          "p-2 grid grid-flow-col grid-rows-7 gap-1 shadow-2xl",
          showDaysOfWeek && "p-4 pt-8",
        )}
      >
        {showDaysOfWeek &&
          daysOfWeek.map((day) => (
            <h1 key={day} className="size-4 rounded text-xs text-gray-400">
              {day}
            </h1>
          ))}
      </div>
      <div
        className="relative grid grid-flow-col grid-rows-7 gap-1 p-4 pt-8 overflow-x-scroll"
        ref={scrollRef}
      >
        {days.map((day) => (
          <DaySquare key={day} date={day} showMonths={showMonths} />
        ))}
      </div>
    </div>
  );
};

export default HeatMap;
