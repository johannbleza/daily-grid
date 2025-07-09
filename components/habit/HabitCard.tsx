import { Check } from "lucide-react";
import { colorMap, iconMap } from "@/lib/constants";
import HabitDrawer from "./HabitDrawer";
interface HabitCardProps {
  color?: keyof typeof colorMap;
  name: string;
  icon: string;
}
const HabitCard = ({ name, icon, color = "slate" }: HabitCardProps) => {
  const Icon = iconMap[icon];
  return (
    <div className="bg-zinc-900/40 border-zinc-900 border-1 pt-3 overflow-y-hidden text-white rounded-lg flex flex-col justify-center items-center shadow-lg">
      <div className="flex justify-between w-full px-4">
        <div className="flex items-center  justify-center gap-2">
          <div className={`p-2 ${colorMap[color].dark} rounded-lg`}>
            <Icon className="text-gray-300" />
          </div>
          <h2 className="text-sm">{name}</h2>
        </div>
        <div className={`p-2 ${colorMap[color].normal} rounded-lg`}>
          <Check className="text-gray-300" />
        </div>
      </div>
      <HabitDrawer />
    </div>
  );
};

export default HabitCard;
