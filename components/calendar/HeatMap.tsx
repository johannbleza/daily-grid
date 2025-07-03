"use client";
import DaySquare from "@/components/calendar/DaySquare";
import { colorMap, daysOfWeek, gridGap, squareSize } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface HeatMapProps {
  showDaysOfWeek?: boolean;
  showMonths?: boolean;
  color?: keyof typeof colorMap;
}

const HeatMap = ({
  showMonths = false,
  showDaysOfWeek = false,
  color = "lime",
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
    <div className="bg-gray-950 flex items-center justify-center w-[360px] min-[400px]:w-[400px]">
      <div
        className={cn(
          "p-2 grid grid-flow-col grid-rows-7 gap-1 shadow-2xl",
          showDaysOfWeek && "p-4 pt-6",
        )}
        style={{ gap: gridGap }}
      >
        {showDaysOfWeek &&
          daysOfWeek.map((day) => (
            <h1
              key={day}
              className="flex justify-start items-center text-gray-400"
              style={{
                height: squareSize,
                width: squareSize,
                fontSize: squareSize - 1,
              }}
            >
              {day}
            </h1>
          ))}
      </div>
      <div
        className={cn(
          "relative grid grid-flow-col grid-rows-7 gap-1 p-4  overflow-x-scroll",
          showMonths && "p-4 pt-6",
        )}
        ref={scrollRef}
        style={{ gap: gridGap }}
      >
        {days.map((day) => (
          <DaySquare
            key={day}
            date={day}
            showMonths={showMonths}
            color={color}
          />
        ))}
      </div>
    </div>
  );
};

export default HeatMap;
