import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { borderRadius, colorMap, months, squareSize } from "@/lib/constants";

interface DaySquareProps {
  showMonths: boolean;
  date: string;
  color: keyof typeof colorMap;
}

const DaySquare = ({ date, showMonths, color }: DaySquareProps) => {
  const today = new Date();
  const [month, day] = date.split("/").map(Number);
  const currentDate = today.toLocaleDateString();
  const dateObj = new Date(date);

  const isToday = date === currentDate;
  const isFuture = today < dateObj;

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
          isToday
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
        onClick={() => console.log({ date })}
      >
        <Tooltip>
          <TooltipTrigger className="size-4 max-sm:hidden"></TooltipTrigger>
          <TooltipContent>{date}</TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
};

export default DaySquare;
