import { Check, Dumbbell } from "lucide-react";
import HeatMap from "../calendar/HeatMap";
import { colorMap } from "@/lib/constants";
interface HabitCardProps {
  color: keyof typeof colorMap;
}
const HabitCard = ({ color }: HabitCardProps) => {
  return (
    <div className="bg-gray-950 pt-3 overflow-y-hidden text-white rounded-lg flex flex-col justify-center items-center">
      <div className="flex justify-between w-full px-4">
        <div className="flex items-center  justify-center gap-2">
          <div className={`p-2 ${colorMap[color].dark} rounded-lg`}>
            <Dumbbell className="text-gray-300" />
          </div>
          <h2 className="text-sm">Workout</h2>
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
