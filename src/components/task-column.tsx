import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { TaskCard } from "./task-card";

interface TaskColumnProps {
  id: string;
  title: string;
  count: number;
  tasks: Array<React.ComponentProps<typeof TaskCard>>;
  onAddTask?: () => void;
}

export function TaskColumn({ title, tasks, onAddTask }: TaskColumnProps) {
  return (
    <div className="flex flex-col h-full rounded-lg">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <h2 className="font-semibold">{title}</h2>
          <span className="text-muted-foreground text-sm">{tasks.length}</span>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex-1">
        {tasks.map((task) => (
          <TaskCard key={task.title} {...task} />
        ))}
      </div>
      <div className="p-4 pt-0">
        <Button
          variant="ghost"
          className="w-full text-muted-foreground hover:text-foreground"
          onClick={onAddTask}
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Task
        </Button>
      </div>
    </div>
  );
}
