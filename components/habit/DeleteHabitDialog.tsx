import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { DialogClose } from "@radix-ui/react-dialog";
import { deleteHabit } from "@/lib/actions/habit.actions";
import { useState } from "react";
import { toast } from "sonner";

interface DeleteHabitDialogProps {
  habit_id: string;
  onDelete: () => void;
}

const DeleteHabitDialog = ({ habit_id, onDelete }: DeleteHabitDialogProps) => {
  const [open, setOpen] = useState(false);
  const handleDelete = async () => {
    const toastId = "habit";
    toast("Deleting...", { id: toastId, position: "top-center" });
    try {
      await deleteHabit(habit_id);
      setOpen(false);
      onDelete();
      toast.success("Habit Deleted!", { id: toastId, position: "top-center" });
    } catch (error) {
      console.log(error);
      toast.error("Failed", { id: toastId, position: "top-center" });
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="cursor-pointer">
          Delete Habit
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[400px]">
        <DialogHeader>
          <DialogTitle>Confirm Delete Habit</DialogTitle>
          <DialogDescription>
            This action cannot be undone. Permanently delete this habit and all
            progress?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter
          className="flex flex-row justify-center
          items-center
           gap-4"
        >
          <DialogClose asChild>
            <Button className="cursor-pointer">Cancel</Button>
          </DialogClose>
          <Button
            variant="outline"
            onClick={handleDelete}
            className="cursor-pointer"
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteHabitDialog;
