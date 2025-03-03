import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CiCalendar } from "react-icons/ci";

interface StatisticBoxProps {
  label: string;
  value: number;
}

export default function StatisticBox({ label, value }: StatisticBoxProps) {
  return (
    <Card className=" grow">
      <CardHeader>
        <CardTitle className="text-2xl flex justify-between">
          {label} <CiCalendar></CiCalendar>
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-2xl">{value}</p>
      </CardContent>
    </Card>
  );
}
