import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { months } from "@/lib/constants";

interface DaySquareProps {
  showMonths: boolean;
  date: string;
}

const DaySquare = ({ date, showMonths }: DaySquareProps) => {
  const today = new Date();
  const [month, day] = date.split("/").map(Number);

  return (
    <div>
      {showMonths && day === 1 && (
        <h1 className="absolute top-[8px] text-xs text-gray-400">
          {months[month - 1]}
        </h1>
      )}
      <div
        className={cn(
          "bg-blue-400/20 size-4 rounded",
          date === today.toLocaleDateString() && "bg-blue-400",
          today < new Date(date) && "bg-blue-400/15",
        )}
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
