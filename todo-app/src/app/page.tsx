import Image from "next/image";
import TaskPage from "./taskPage/page";

export default function Home() {
  return (
    <div className="bg-orange-600 flex flex-col h-full w-full">
      todo-app
      <div className="" >
        <TaskPage/>
      </div>
    </div>
  );
}
