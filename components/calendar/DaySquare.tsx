import { cn } from "@/lib/utils";
import { borderRadius, colorMap, months, squareSize } from "@/lib/constants";
import { Day } from "@/lib/types/day";

interface DaySquareProps {
  showMonths: boolean;
  date: string;
  color: keyof typeof colorMap;
  completedDays: Day[];
}

const DaySquare = ({
  completedDays,
  date,
  showMonths,
  color,
}: DaySquareProps) => {
  const today = new Date();
  const [month, day] = date.split("/").map(Number);
  // const currentDate = today.toLocaleDateString();
  const dateObj = new Date(date);

  // const isToday = date === currentDate;
  const isFuture = today < dateObj;

  const isComplete = completedDays.some((obj) => obj.date.includes(date));

  return (
    <div>
      {showMonths && day === 1 && (
        <h1
          className="absolute top-[6px] text-gray-400"
          style={{ fontSize: squareSize }}
        >
          {months[month - 1]}
        </h1>
      )}
      <div
        className={cn(
          "size-4",
          isComplete
            ? colorMap[color].normal
            : isFuture
              ? colorMap[color].light
              : colorMap[color].dark,
        )}
        style={{
          height: squareSize,
          width: squareSize,
          borderRadius: borderRadius,
        }}
      ></div>
    </div>
  );
};

export default DaySquare;
