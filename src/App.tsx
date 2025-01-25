import { TaskBoard } from "./components/task-board";

function App() {
  return (
    <div className="bg-background w-full flex flex-col items-center justify-between p-10 gap-4 max-w-[1440px] mx-auto">
      <TaskBoard />
    </div>
  );
}

export default App;
