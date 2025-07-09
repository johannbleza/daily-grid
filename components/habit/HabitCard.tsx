import { Check } from "lucide-react";
import { colorMap, iconMap } from "@/lib/constants";
import HabitDrawer from "./HabitDrawer";
import { useCallback, useEffect, useState } from "react";
import { Day } from "@/lib/types/day";
import {
  completeDay,
  getDaysCompleted,
  removeDay,
} from "@/lib/actions/day.actions";
import { cn } from "@/lib/utils";
interface HabitCardProps {
  color?: keyof typeof colorMap;
  name: string;
  id: string;
  description: string;
  icon: string;
  onEdit: () => void;
}
const HabitCard = ({
  id,
  name,
  icon,
  description,
  color = "slate",
  onEdit,
}: HabitCardProps) => {
  const [completedDays, setCompletedDays] = useState<Day[]>([]);

  const fetchCompletedDays = useCallback(async () => {
    try {
      setCompletedDays((await getDaysCompleted(id)) ?? []);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    fetchCompletedDays();
  }, [fetchCompletedDays]);

  const today = new Date().toLocaleDateString();
  const isComplete = completedDays.some((obj) => obj.date.includes(today));

  const handleComplete = async (date: string) => {
    await completeDay({ date: date, habit_id: id });
    fetchCompletedDays();
  };
  const handleRemove = async (date: string) => {
    await removeDay(id, date);
    fetchCompletedDays();
  };

  const Icon = iconMap[icon];
  return (
    <div className="bg-zinc-900/40 border-zinc-900 border-1 pt-3 overflow-y-hidden text-white rounded-lg flex flex-col justify-center items-center shadow-lg">
      <div className="flex justify-between w-full px-4">
        <div className="flex items-center  justify-center gap-2">
          <div className={`p-2 ${colorMap[color].dark} rounded-lg`}>
            <Icon className="text-gray-300" />
          </div>
          <h2 className="text-sm max-w-[200px] truncate">{name}</h2>
        </div>
        <div
          className={cn(
            `p-2 ${colorMap[color].normal} rounded-lg`,
            isComplete && `${colorMap[color].light}`,
          )}
          onClick={
            isComplete ? () => handleRemove(today) : () => handleComplete(today)
          }
        >
          <Check className="text-gray-300" />
        </div>
      </div>
      <HabitDrawer
        completedDays={completedDays}
        id={id}
        name={name}
        description={description}
        icon={icon}
        onAction={fetchCompletedDays}
        onEdit={onEdit}
      />
    </div>
  );
};

export default HabitCard;
