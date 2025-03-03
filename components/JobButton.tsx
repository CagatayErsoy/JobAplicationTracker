import { Button } from "@/components/ui/button";
import { IconType } from "react-icons";

interface JobButtonProps {
  platform: string;
  icon: IconType;
  applied: number;
}

export default function JobButton({
  platform,
  icon: Icon,
  applied,
}: JobButtonProps) {
  return (
    <Button
      variant="outline"
      className="flex items-center space-x-6 text-xl py-6 "
    >
      <Icon className="w-5 h-5 text-blue-900" />
      <div>{platform}</div>
      <div>{applied}</div>
    </Button>
  );
}
