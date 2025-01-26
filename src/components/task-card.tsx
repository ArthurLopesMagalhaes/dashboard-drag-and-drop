import { useDraggable } from '@dnd-kit/core';
import { Trash } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export interface TaskCardProps {
  id: string;
  title: string;
  description: string;
  content: string;
  status: 'todo' | 'inProgress' | 'review' | 'done' | 'carousel';
  onRemove: (id: string) => void;
}

export function TaskCard({
  id,
  title,
  description,
  content,
  onRemove,
}: TaskCardProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });

  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;

  return (
    <motion.div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="mb-4 cursor-pointer rounded-lg border border-zinc-200 bg-zinc-100 transition-shadow hover:shadow-md"
      style={style}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="p-4 pb-2">
        <div className="mb-2 flex gap-2"></div>
        <h3 className="text-sm font-semibold">{title}</h3>
      </div>
      <div className="p-4 pt-0">
        <p className="mb-4 text-sm text-muted-foreground">{description}</p>
        <div className="rounded-lg bg-zinc-200 p-3">
          <p>{content}</p>
        </div>
        <Button
          variant="outline"
          className="mt-4 w-full text-muted-foreground hover:text-foreground"
          onClick={() => onRemove(id)}
        >
          <Trash className="mr-2 h-4 w-4" />
          Delete task
        </Button>
      </div>
    </motion.div>
  );
}
