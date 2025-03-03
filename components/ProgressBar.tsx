"use client";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { EditGoal } from "./EditGoal";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  return (
    <div className="h-20 w-full  flex flex-col gap-10">
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold">Goal Progress</h3>
        <EditGoal setProgress={setProgress}></EditGoal>
      </div>

      <Progress value={progress} />
    </div>
  );
}
