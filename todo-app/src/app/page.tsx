import Image from "next/image";
import TaskPage from "./taskPage/page";

export default function Home() {
  return (
    <div className="flex flex-col h-full w-ful text-white">

      <div className="flex h-full" >
        <TaskPage/>
      </div>
    </div>
  );
}
