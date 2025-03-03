import ProgressBar from "@/components/ProgressBar";
import React from "react";
import platforms from "../platformData";
import JobButton from "@/components/JobButton";
import statisticData from "../statisticData";
import StatisticBox from "@/components/StatisticBox";
import { Trends } from "@/components/Trends";
export default function Dashboard() {
  return (
    <div className="flex px-20 flex-col gap-10">
      <ProgressBar></ProgressBar>
      <div className="flex flex-col gap-10">
        <h3 className="text-2xl font-bold">Quick Apply </h3>
        <div className="flex gap-10 flex-wrap">
          {platforms.map((item) => (
            <JobButton
              key={item.platform}
              platform={item.platform}
              icon={item.icon}
              applied={item.applied}
            ></JobButton>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <h3 className="text-2xl font-bold">Application Statistic </h3>
        <div className="flex gap-10 flex-wrap ">
          {statisticData.map((data) => (
            <StatisticBox
              key={data.label}
              label={data.label}
              value={data.value}
            />
          ))}
        </div>
      </div>
      <div>
        <Trends />
      </div>
    </div>
  );
}
