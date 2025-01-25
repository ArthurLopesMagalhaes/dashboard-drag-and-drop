import { useDraggable } from "@dnd-kit/core";
import { Trash } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";

export interface TaskCardProps {
  id: string;
  title: string;
  description: string;
  content: string;
  status: "todo" | "inProgress" | "review";
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
      className="mb-4 cursor-pointer hover:shadow-md transition-shadow border bg-zinc-100 border-zinc-200 rounded-lg"
      style={style}
      // initial={{ opacity: 0, scale: 0.8 }}
      // animate={{ opacity: 1, scale: 1 }}
      // transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="p-4 pb-2">
        <div className="flex gap-2 mb-2">
          <Button
            variant="outline"
            className="w-full text-muted-foreground hover:text-foreground"
            onClick={() => onRemove(id)}
          >
            <Trash className="h-4 w-4 mr-2" />
            Delete task
          </Button>
        </div>
        <h3 className="font-semibold text-sm">{title}</h3>
      </div>
      <div className="p-4 pt-0">
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="bg-zinc-200 p-3 rounded-lg">
          <p>{content}</p>
        </div>
      </div>
    </motion.div>
  );
}
