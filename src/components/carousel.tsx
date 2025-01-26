import { useDroppable } from '@dnd-kit/core';
import { TaskCard, TaskCardProps } from './task-card';

import {
  Carousel as CarouselRoot,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import { cn } from '../lib/utils';

interface CarouselProps {
  id: string;
  tasks: Omit<TaskCardProps, 'onRemove'>[];
  onRemoveTask: (id: string) => void;
}

export function Carousel({ id, tasks, onRemoveTask }: CarouselProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: id,
  });

  return (
    <CarouselRoot className="max-w-[200px] md:max-w-screen-md lg:max-w-screen-lg">
      <CarouselContent
        ref={setNodeRef}
        className={cn('min-h-52', isOver && 'bg-green-100')}
      >
        {tasks.length === 0 && (
          <CarouselItem>
            <div className="flex h-full items-center justify-center">
              <p className="text-muted-foreground">Drop tasks here</p>
            </div>
          </CarouselItem>
        )}

        {tasks.map((task) => (
          <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
            <TaskCard
              id={task.id}
              title={task.title}
              description={task.description}
              content={task.content}
              status={task.status}
              onRemove={() => onRemoveTask(task.id)}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </CarouselRoot>
  );
}
