"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import IconPicker from "./IconPicker";
import { useState } from "react";
const AddHabitDrawer = () => {
  const [selectedIcon, setSelectedIcon] = useState("");
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">
          <span>Add</span>
          <Plus />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="min-h-3/4  max-w-[28rem] mx-auto">
        <DrawerHeader>
          <DrawerTitle className="text-2xl">New Habit</DrawerTitle>
        </DrawerHeader>
        <div className="flex justify-center items-center">
          <IconPicker
            onIconSelect={setSelectedIcon}
            selectedIcon={selectedIcon}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default AddHabitDrawer;
