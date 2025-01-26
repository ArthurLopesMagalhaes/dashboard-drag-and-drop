import { Button } from './ui/button';
import { Plus } from 'lucide-react';
import { TaskCard, TaskCardProps } from './task-card';
import { useDroppable } from '@dnd-kit/core';
import { cn } from '../lib/utils';

interface TaskColumnProps {
  id: string;
  title: string;
  tasks: Omit<TaskCardProps, 'onRemove'>[];
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
    <div className="flex h-full flex-col rounded-lg p-2">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <h2 className="font-semibold">{title}</h2>
          <span className="text-sm text-muted-foreground">{tasks.length}</span>
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
      <div
        ref={setNodeRef}
        className={cn(
          'min-h-20 flex-1 gap-3 rounded-lg border-2 border-gray-200 p-1',
          isOver && 'bg-green-100'
        )}
      >
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
          <Plus className="mr-2 h-4 w-4" />
          Add Task
        </Button>
      </div>
    </div>
  );
}
