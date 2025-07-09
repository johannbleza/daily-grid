import { Edit } from "lucide-react";
import HeatMap from "../calendar/HeatMap";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import Calendar from "../calendar/Calendar";
import { iconMap } from "@/lib/constants";
import { Day } from "@/lib/types/day";

interface HabitDrawerProps {
  id: string;
  name: string;
  description: string;
  icon: string;
  completedDays: Day[];
  onAction: () => void;
}

const HabitDrawer = ({
  id,
  name,
  description,
  icon,
  completedDays,
  onAction,
}: HabitDrawerProps) => {
  const Icon = iconMap[icon];
  return (
    <Drawer>
      <DrawerTrigger>
        <HeatMap completedDays={completedDays} />
      </DrawerTrigger>
      <DrawerContent className="mx-auto p-4  max-w-[28rem] flex justify-center items-center">
        <DrawerHeader className="flex justify-between flex-row w-full text-zinc-400">
          <div className="flex justify-center items-center">
            <Icon className="size-8 mr-4" />
            <div className="flex flex-col justify-start items-start">
              <DrawerTitle className="text-xl max-w-[200px] truncate">
                {name}
              </DrawerTitle>
              <DrawerDescription>
                {description == "" ? "No description." : description}
              </DrawerDescription>
            </div>
          </div>
          <Edit className="size-5" />
        </DrawerHeader>
        <HeatMap
          showDaysOfWeek={true}
          showMonths={true}
          completedDays={completedDays}
        />
        <Calendar
          habit_id={id}
          onAction={onAction}
          completedDays={completedDays}
        />
      </DrawerContent>
    </Drawer>
  );
};

export default HabitDrawer;
