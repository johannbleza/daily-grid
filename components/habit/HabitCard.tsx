import { Book, Check } from "lucide-react";
import HeatMap from "../calendar/HeatMap";
import { colorMap } from "@/lib/constants";
interface HabitCardProps {
  color?: keyof typeof colorMap;
}
const HabitCard = ({ color = "slate" }: HabitCardProps) => {
  return (
    <div className="bg-zinc-900/40 border-zinc-900 border-1 pt-3 overflow-y-hidden text-white rounded-lg flex flex-col justify-center items-center shadow-lg">
      <div className="flex justify-between w-full px-4">
        <div className="flex items-center  justify-center gap-2">
          <div className={`p-2 ${colorMap[color].dark} rounded-lg`}>
            <Book className="text-gray-300" />
          </div>
          <h2 className="text-sm">Read a Book</h2>
        </div>
        <div className={`p-2 ${colorMap[color].normal} rounded-lg`}>
          <Check className="text-gray-300" />
        </div>
      </div>
      <HeatMap color={color} />
    </div>
  );
};

export default HabitCard;
