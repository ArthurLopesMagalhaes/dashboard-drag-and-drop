import {
  DragEndEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { TaskCardProps } from '../components/task-card';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { SAMPLE_TASKS } from '../mocks/sampleTasks';

export function useDragAndDropCards() {
  const [tasks, setTasks] = useState(SAMPLE_TASKS);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    })
  );

  function handleDeleteTask(taskId: string) {
    setTasks(() => tasks.filter((task) => task.id !== taskId));
  }

  function handleAddNewTask(status: TaskCardProps['status']) {
    const newTask = {
      id: uuidv4(),
      title: 'New task',
      description: 'Description',
      content: 'Content',
      status,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id as string;
    const newStatus = over.id as TaskCardProps['status'];

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

  return {
    tasks,
    sensors,
    handleDeleteTask,
    handleAddNewTask,
    handleDragEnd,
  };
}
