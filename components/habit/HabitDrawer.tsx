import { Dumbbell, Edit } from "lucide-react";
import HeatMap from "../calendar/HeatMap";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import Calendar from "../calendar/Calendar";

const HabitDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger>
        <HeatMap />
      </DrawerTrigger>
      <DrawerContent className="mx-auto p-4  max-w-[28rem] flex justify-center items-center">
        <DrawerHeader className="flex justify-between flex-row w-full text-zinc-400">
          <div className="flex justify-center items-center">
            <Dumbbell className="size-8 mr-4" />
            <div className="flex flex-col justify-start items-start">
              <DrawerTitle className="text-xl">Gym</DrawerTitle>
              <DrawerDescription>No description.</DrawerDescription>
            </div>
          </div>
          <Edit className="size" />
        </DrawerHeader>
        <HeatMap showDaysOfWeek={true} showMonths={true} />
        <Calendar />
      </DrawerContent>
    </Drawer>
  );
};

export default HabitDrawer;
