import { useDraggable } from "@dnd-kit/core";

export interface TaskCardProps {
  id: string;
  title: string;
  description: string;
  content: string;
  status: "todo" | "inProgress" | "review";
}

export function TaskCard({ id, title, description, content }: TaskCardProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });

  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="mb-4 cursor-pointer hover:shadow-md transition-shadow border bg-zinc-100 border-zinc-200 rounded-lg"
      style={style}
    >
      <div className="p-4 pb-2">
        <div className="flex gap-2 mb-2"></div>
        <h3 className="font-semibold text-sm">{title}</h3>
      </div>
      <div className="p-4 pt-0">
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="bg-zinc-200 p-3 rounded-lg">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
