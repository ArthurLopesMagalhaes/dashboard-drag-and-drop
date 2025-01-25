import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { TaskCard, TaskCardProps } from "./task-card";
import { useDroppable } from "@dnd-kit/core";
import { cn } from "../lib/utils";

interface TaskColumnProps {
  id: string;
  title: string;
  tasks: Omit<TaskCardProps, "onRemove">[];
  onRemoveTask: (id: string) => void;
  onAddTask: () => void;
}

export function TaskColumn({
  id,
  title,
  tasks,
  onAddTask,
  onRemoveTask,
}: TaskColumnProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: id,
  });

  return (
    <div
      className={cn(
        "flex flex-col h-full  rounded-lg w-[320px] ",
        isOver && "bg-green-100"
      )}
    >
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <h2 className="font-semibold">{title}</h2>
          <span className="text-muted-foreground text-sm">{tasks.length}</span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={onAddTask}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <div ref={setNodeRef} className="flex-1 min-h-20">
        {tasks.map((task) => (
          <TaskCard
            key={task.title}
            content={task.content}
            id={task.id}
            description={task.description}
            status={task.status}
            title={task.title}
            onRemove={onRemoveTask}
          />
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
