import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dispatch, SetStateAction, useState } from "react";
interface EditGoalProps {
  setProgress: Dispatch<SetStateAction<number>>;
}
export function EditGoal({ setProgress }: EditGoalProps) {
  const [val, setVal] = useState(10);
  const [open, setOpen] = useState(false);
  function handleClick() {
    setProgress(val);
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Goal</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Daily Job application goal</DialogTitle>
          <DialogDescription>
            Choose wisely for daily goal and reach that goal
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Daily Goal
            </Label>
            <Input
              id="name"
              value={val}
              onChange={(e) => setVal(Number(e?.target.value))}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={() => handleClick()}>Save </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
