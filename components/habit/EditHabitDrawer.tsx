"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Edit } from "lucide-react";
import IconPicker from "./IconPicker";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { editHabit } from "@/lib/actions/habit.actions";
import { useState } from "react";
import DeleteHabitDialog from "./DeleteHabitDialog";

const formSchema = z.object({
  icon: z.string().min(2, {
    message: "Icon is required.",
  }),
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  description: z.string(),
});

interface EditHabitDrawer {
  habit_id: string;
  onEdit: () => void;
  icon: string;
  name: string;
  description: string;
}

const EditHabitDrawer = ({
  habit_id,
  icon,
  name,
  description,
  onEdit,
}: EditHabitDrawer) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: {
      icon: icon,
      name: name,
      description: description,
    },
  });

  const [open, setOpen] = useState(false);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    await editHabit(values, habit_id);
    setOpen(false);
    onEdit();
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild onClick={() => form.reset()}>
        <Edit className="size-5" />
      </DrawerTrigger>
      <DrawerContent className="min-h-7/10 max-w-[28rem] mx-auto">
        <DrawerHeader>
          <DrawerTitle className="text-2xl">Edit Habit</DrawerTitle>
        </DrawerHeader>
        <div className="p-4 ">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="icon"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-center justify-center">
                    <FormControl>
                      <IconPicker
                        placeHolder={icon}
                        selectedIcon={field.value}
                        onIconSelect={(iconName) => field.onChange(iconName)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., Go to the gym, Read for 30 minutes"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Optional: Add more details (e.g., benefits, specific steps)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-col gap-4">
                <Button type="submit" className="w-full">
                  Save Changes
                </Button>
                <DrawerClose asChild>
                  <Button variant="outline" className="w-full">
                    Cancel
                  </Button>
                </DrawerClose>
                <DeleteHabitDialog habit_id={habit_id} onDelete={onEdit} />
              </div>
            </form>
          </Form>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default EditHabitDrawer;
