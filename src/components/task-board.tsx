import {
  DndContext,
  DragEndEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { TaskCardProps } from "./task-card";
import { TaskColumn } from "./task-column";
import { useState } from "react";
import { SAMPLE_COLUMNS } from "../mocks/sampleColumns";
import { SAMPLE_TASKS } from "../mocks/sampleTasks";

import { v4 as uuidv4 } from "uuid";

export function TaskBoard() {
  const [tasks, setTasks] = useState(SAMPLE_TASKS);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    })
  );

  function handleDeleteTask(taskId: string) {
    // console.log(taskId);
    setTasks(() => tasks.filter((task) => task.id !== taskId));
  }

  function handleAddNewTask(status: TaskCardProps["status"]) {
    const newTask = {
      id: uuidv4(),
      title: "New task",
      description: "Description",
      content: "Content",
      status,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id as string;
    const newStatus = over.id as TaskCardProps["status"];

    setTasks(() =>
      tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: newStatus,
            }
          : task
      )
    );
  }

  return (
    <div className="flex h-full bg-zinc-50 rounded-lg flex-grow justify-center">
      <div className="grid grid-cols-1 gap-4 lg:max-2xl:grid-cols-3 2xl:grid-cols-4">
        <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
          {SAMPLE_COLUMNS.map((column) => (
            <TaskColumn
              key={column.id}
              id={column.id}
              title={column.title}
              tasks={tasks.filter((task) => task.status === column.id)}
              onRemoveTask={(id) => handleDeleteTask(id)}
              onAddTask={() =>
                handleAddNewTask(column.id as TaskCardProps["status"])
              }
            />
          ))}
        </DndContext>
      </div>
    </div>
  );
}
