import Title from "@/components/Title";
import Dashboard from "./dashboard/page";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Title></Title>
      <Dashboard></Dashboard>
    </div>
  );
}
